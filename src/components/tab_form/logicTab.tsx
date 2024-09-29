import React, { useState } from "react";
import ReactFlow, {
  ReactFlowProvider,
  Node,
  Edge,
  Controls,
  Background,
  ConnectionLineType,
  NodeChange,
  EdgeChange,
  applyNodeChanges,
  applyEdgeChanges,
  MarkerType,
  OnConnect,
} from "reactflow";
import "reactflow/dist/style.css";
import CustomNode from "./customNode";
import ThankYouNode from "./thankYouNode";

const nodeTypes = { customNode: CustomNode, thankYouNode: ThankYouNode };

const nodeStyles = {
  zIndex: 10,
};

const initialNodes: Node[] = [
  {
    id: "1",
    type: "customNode",
    data: { label: "Question 1", page: "Page 1" },
    position: { x: 100, y: 150 },
    style: nodeStyles,
  },
  {
    id: "2",
    type: "customNode",
    data: { label: "Question 2", page: "Page 2" },
    position: { x: 300, y: 350 },
    style: nodeStyles,
  },
  {
    id: "3",
    type: "customNode",
    data: { label: "Question 3", page: "Page 3" },
    position: { x: 500, y: 150 },
    style: nodeStyles,
  },
  {
    id: "4",
    type: "thankYouNode",
    data: { label: "Thank you page", page: "Thank you page" },
    position: { x: 700, y: 350 },
    style: nodeStyles,
  },
];

const customEdgeStyle = {
  strokeWidth: 2,
  stroke: "#b1b1b7",
};

const initialEdges: Edge[] = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    type: ConnectionLineType.SmoothStep,
    style: customEdgeStyle,
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: "e2-3",
    source: "2",
    target: "3",
    type: ConnectionLineType.SmoothStep,
    style: customEdgeStyle,
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: "e3-4",
    source: "3",
    target: "4",
    type: ConnectionLineType.SmoothStep,
    style: customEdgeStyle,
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
];

const LogicTab: React.FC = () => {
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);

  const onNodesChange = (changes: NodeChange[]) =>
    setNodes((nds) => applyNodeChanges(changes, nds));

  const onEdgesChange = (changes: EdgeChange[]) =>
    setEdges((eds) => applyEdgeChanges(changes, eds));

  const onConnect: OnConnect = (params) => {
    if (params.source && params.target) {
      const newEdge: Edge = {
        id: `e${params.source}-${params.target}`,
        source: params.source,
        target: params.target,
        type: ConnectionLineType.SmoothStep,
        style: customEdgeStyle,
        markerEnd: {
          type: MarkerType.ArrowClosed, // Add arrow to the end of the line
        },
      };
      setEdges((eds) => [...eds, newEdge]);
    }
  };

  return (
    <>
      <div className="w-full h-full flex flex-col border-r hover:overflow-auto">
        <ReactFlowProvider>
          <div style={{ height: "100vh", width: "100%" }}>
            <ReactFlow
              nodes={nodes}
              edges={edges}
              nodeTypes={nodeTypes}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect} // Add this to dynamically create connections
              fitView
              fitViewOptions={{ padding: 0.2 }} // Ensure proper padding around nodes
              panOnScroll={true}
              panOnDrag={true}
              connectionLineType={ConnectionLineType.SmoothStep} // Smooth lines
            >
              <Background />
              <Controls />
            </ReactFlow>
          </div>
        </ReactFlowProvider>
      </div>
    </>
  );
};

export default LogicTab;
