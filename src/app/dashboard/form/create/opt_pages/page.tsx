///////////////////////////contains those sepearte pages of main container
"use client"
import React from 'react';
import { cn } from '@/lib/utils'; // Shadcn's class func.
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, ChevronDown, ChevronUp, Copy, Pen, Settings, Trash } from "lucide-react"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"



export default function OptPages() {
    return (
        <>
{/* ////////////////////////PAGE-1(Radio button)Multiple choice question///////////////////////////////////////////// */}
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: '100vh',
                padding: '20px',
                boxSizing: 'border-box'
            }}>
                {/* Header Section */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '80%',  // Set width to match the main container
                    marginBottom: '7px',
                    textAlign: 'left',
                    boxSizing: 'border-box'
                }}>
                    <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                        <h1 style={{ margin: 0, display: 'flex', alignItems: 'center', fontWeight: 'bold' }}>
                            Page1
                            <Pen style={{ marginLeft: '8px', height: '16px', width: '16px' }} />
                        </h1>
                    </div>

                    {/* //////////////////////////////////HEADER BUTTONS////////////////////////////////////////////// */}
                    <>

                        <div style={{
                            display: 'flex',  // Use flexbox to lay out buttons in a row
                            alignItems: 'center',  // Align items vertically in the center
                            gap: '10px'  // Optional: Adds space between buttons
                        }}>
                            <button style={{
                                padding: '10px',
                                border: 'none',
                                borderRadius: '50%',
                                backgroundColor: '#f0f0f0',
                                color: 'white',
                                cursor: 'pointer',
                                position: 'relative',
                                width: '40px',
                                height: '40px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <ChevronUp style={{ width: '24px', height: '24px', color: 'black' }} />
                                <div style={{
                                    visibility: 'hidden',
                                    position: 'absolute',
                                    bottom: '100%',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    backgroundColor: '#333',
                                    color: '#fff',
                                    padding: '5px 10px',
                                    borderRadius: '4px',
                                    whiteSpace: 'nowrap',
                                    zIndex: 1,
                                    fontSize: '12px'
                                }}>
                                    Page Up
                                </div>
                            </button>

                            <button style={{
                                padding: '10px',
                                border: 'none',
                                borderRadius: '50%',
                                backgroundColor: '#f0f0f0',
                                color: 'white',
                                cursor: 'pointer',
                                position: 'relative',
                                width: '40px',
                                height: '40px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <ChevronDown style={{ width: '24px', height: '24px', color: 'black' }} />
                                <div style={{
                                    visibility: 'hidden',
                                    position: 'absolute',
                                    bottom: '100%',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    backgroundColor: '#333',
                                    color: '#fff',
                                    padding: '5px 10px',
                                    borderRadius: '4px',
                                    whiteSpace: 'nowrap',
                                    zIndex: 1,
                                    fontSize: '12px'
                                }}>
                                    Page Down
                                </div>
                            </button>

                            <button style={{
                                padding: '10px',
                                border: 'none',
                                borderRadius: '50%',
                                backgroundColor: '#f0f0f0',
                                color: 'white',
                                cursor: 'pointer',
                                position: 'relative',
                                width: '40px',
                                height: '40px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <Settings style={{ width: '24px', height: '24px', color: 'black' }} />
                                <div style={{
                                    visibility: 'hidden',
                                    position: 'absolute',
                                    bottom: '100%',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    backgroundColor: '#333',
                                    color: '#fff',
                                    padding: '5px 10px',
                                    borderRadius: '4px',
                                    whiteSpace: 'nowrap',
                                    zIndex: 1,
                                    fontSize: '12px'
                                }}>
                                    Settings
                                </div>
                            </button>

                            <button style={{
                                padding: '10px',
                                border: 'none',
                                borderRadius: '50%',
                                backgroundColor: '#f0f0f0',
                                color: 'white',
                                cursor: 'pointer',
                                position: 'relative',
                                width: '40px',
                                height: '40px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <Copy style={{ width: '24px', height: '24px', color: 'black' }} />
                                <div style={{
                                    visibility: 'hidden',
                                    position: 'absolute',
                                    bottom: '100%',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    backgroundColor: '#333',
                                    color: '#fff',
                                    padding: '5px 10px',
                                    borderRadius: '4px',
                                    whiteSpace: 'nowrap',
                                    zIndex: 1,
                                    fontSize: '12px'
                                }}>
                                    Duplicate
                                </div>
                            </button>

                            <button style={{
                                padding: '10px',
                                border: 'none',
                                borderRadius: '50%',
                                backgroundColor: '#f0f0f0',
                                color: 'white',
                                cursor: 'pointer',
                                position: 'relative',
                                width: '40px',
                                height: '40px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <Trash style={{ width: '24px', height: '24px', color: 'black' }} />
                                <div style={{
                                    visibility: 'hidden',
                                    position: 'absolute',
                                    bottom: '100%',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    backgroundColor: '#333',
                                    color: '#fff',
                                    padding: '5px 10px',
                                    borderRadius: '4px',
                                    whiteSpace: 'nowrap',
                                    zIndex: 1,
                                    fontSize: '12px'
                                }}>
                                    Delete
                                </div>
                            </button>
                        </div>

                    </>


                </div>

                {/* Main Container */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    border: '5px solid black',
                    borderRadius: '8px',
                    width: '80%',  // Match width with the header
                    height: '80%',
                    backgroundColor: 'white',
                    boxSizing: 'border-box'
                }}>
                    <div style={{
                        flex: 1,
                        padding: '20px',
                        boxSizing: 'border-box'
                    }}>
                        {/* Image */}
                        <img
                            src="/images/image.jpg"
                            alt="Description of image"
                            style={{
                                width: '100%', // Adjust the width as needed
                                height: 'auto', // Maintain aspect ratio
                                marginBottom: '20px' // Space between image and text
                            }}
                        />


                    </div>


                    <div style={{
                        flex: 1,
                        padding: '20px',
                        boxSizing: 'border-box'
                    }}>
                        {/* Content for the second section */}
                        <Card className="w-[550px], h-[500px]">
                            <CardHeader>
                                <CardTitle>Question 1</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <form>
                                    <div className="flex justify-between ">
                                        <Label className="font-bold text-base">Question 1</Label>
                                        <span className="bg-gray-400 mb-4 rounded-lg">Verplicht</span>
                                    </div>
                                    <RadioGroup defaultValue="option-one">
                                        <div className="flex flex-col space-y-2">
                                            <div className="p-4 rounded-lg border border-gray-300 flex items-center space-x-80">
                                                {/* Image in front of Answer A */}

                                                <div className="flex items-center space-x-2">
                                                    <RadioGroupItem value="option-one" id="option-one" />
                                                    <Label htmlFor="option-one">Answer A</Label>
                                                </div>
                                                <img
                                                    src="your-image-url.jpg"
                                                    className="w-8 ml-6 h-8 object-contain"
                                                />
                                            </div>
                                            <div className="p-4 rounded-lg border border-gray-300">
                                                <div className="flex items-center space-x-2">
                                                    <RadioGroupItem value="option-two" id="option-two" />
                                                    <Label htmlFor="option-two">Answer B</Label>
                                                </div>
                                            </div>
                                            <div className="p-4 rounded-lg border border-gray-300">
                                                <div className="flex items-center space-x-2">
                                                    <RadioGroupItem value="option-three" id="option-three" />
                                                    <Label htmlFor="option-three">Answer C</Label>
                                                </div>
                                            </div>
                                        </div>
                                    </RadioGroup>
                                </form>
                            </CardContent>
                            <CardFooter className="flex justify-between">

                                <Button
                                    style={{
                                        backgroundColor: 'white',
                                        color: 'black',
                                        borderRadius: '50%', // Circle shape
                                        width: '50px',       // Adjust width as needed
                                        height: '50px',      // Adjust height to match width
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        border: '2px solid black', // Black border
                                        marginRight: '10px',
                                        cursor: 'pointer',
                                        transition: 'background-color 0.3s'
                                    }}
                                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'lightgray'}
                                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'white'}
                                >
                                    <ArrowLeft
                                        style={{
                                            color: 'black',
                                            fontWeight: 'bold',
                                            width: '24px', // Adjust to fit the button
                                            height: '24px' // Adjust to fit the button
                                        }}
                                    />
                                </Button>

                                <Button
                                    style={{
                                        backgroundColor: 'black',
                                        color: 'white',
                                        borderRadius: '25px', // Oval shape
                                        padding: '10px 20px',
                                        border: 'none',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        transition: 'background-color 0.3s'
                                    }}
                                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'gray'}
                                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'black'}
                                >
                                    <span style={{ marginRight: '8px' }}>Volgende</span>
                                    <ArrowRight
                                        style={{
                                            color: 'white',
                                            fontWeight: 'bold',
                                            width: '16px', // Adjust to fit the button
                                            height: '16px' // Adjust to fit the button
                                        }}
                                    />
                                </Button>

                            </CardFooter>

                        </Card>
                    </div>
                </div>
            </div>

{/* ////////////////////////PAGE-2(slider)Number question///////////////////////////////////////////// */}

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: '100vh',
                padding: '20px',
                boxSizing: 'border-box'
            }}>
                {/* Header Section */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '80%',  // Set width to match the main container
                    marginBottom: '7px',
                    textAlign: 'left',
                    boxSizing: 'border-box'
                }}>
                    <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                        <h1 style={{ margin: 0, display: 'flex', alignItems: 'center', fontWeight: 'bold' }}>
                            Page2
                            <Pen style={{ marginLeft: '8px', height: '16px', width: '16px' }} />
                        </h1>
                    </div>

                    {/* //////////////////////////////////HEADER BUTTONS////////////////////////////////////////////// */}
                    <>

                        <div style={{
                            display: 'flex',  // Use flexbox to lay out buttons in a row
                            alignItems: 'center',  // Align items vertically in the center
                            gap: '10px'  // Optional: Adds space between buttons
                        }}>
                            <button style={{
                                padding: '10px',
                                border: 'none',
                                borderRadius: '50%',
                                backgroundColor: '#f0f0f0',
                                color: 'white',
                                cursor: 'pointer',
                                position: 'relative',
                                width: '40px',
                                height: '40px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <ChevronUp style={{ width: '24px', height: '24px', color: 'black' }} />
                                <div style={{
                                    visibility: 'hidden',
                                    position: 'absolute',
                                    bottom: '100%',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    backgroundColor: '#333',
                                    color: '#fff',
                                    padding: '5px 10px',
                                    borderRadius: '4px',
                                    whiteSpace: 'nowrap',
                                    zIndex: 1,
                                    fontSize: '12px'
                                }}>
                                    Page Up
                                </div>
                            </button>

                            <button style={{
                                padding: '10px',
                                border: 'none',
                                borderRadius: '50%',
                                backgroundColor: '#f0f0f0',
                                color: 'white',
                                cursor: 'pointer',
                                position: 'relative',
                                width: '40px',
                                height: '40px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <ChevronDown style={{ width: '24px', height: '24px', color: 'black' }} />
                                <div style={{
                                    visibility: 'hidden',
                                    position: 'absolute',
                                    bottom: '100%',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    backgroundColor: '#333',
                                    color: '#fff',
                                    padding: '5px 10px',
                                    borderRadius: '4px',
                                    whiteSpace: 'nowrap',
                                    zIndex: 1,
                                    fontSize: '12px'
                                }}>
                                    Page Down
                                </div>
                            </button>

                            <button style={{
                                padding: '10px',
                                border: 'none',
                                borderRadius: '50%',
                                backgroundColor: '#f0f0f0',
                                color: 'white',
                                cursor: 'pointer',
                                position: 'relative',
                                width: '40px',
                                height: '40px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <Settings style={{ width: '24px', height: '24px', color: 'black' }} />
                                <div style={{
                                    visibility: 'hidden',
                                    position: 'absolute',
                                    bottom: '100%',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    backgroundColor: '#333',
                                    color: '#fff',
                                    padding: '5px 10px',
                                    borderRadius: '4px',
                                    whiteSpace: 'nowrap',
                                    zIndex: 1,
                                    fontSize: '12px'
                                }}>
                                    Settings
                                </div>
                            </button>

                            <button style={{
                                padding: '10px',
                                border: 'none',
                                borderRadius: '50%',
                                backgroundColor: '#f0f0f0',
                                color: 'white',
                                cursor: 'pointer',
                                position: 'relative',
                                width: '40px',
                                height: '40px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <Copy style={{ width: '24px', height: '24px', color: 'black' }} />
                                <div style={{
                                    visibility: 'hidden',
                                    position: 'absolute',
                                    bottom: '100%',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    backgroundColor: '#333',
                                    color: '#fff',
                                    padding: '5px 10px',
                                    borderRadius: '4px',
                                    whiteSpace: 'nowrap',
                                    zIndex: 1,
                                    fontSize: '12px'
                                }}>
                                    Duplicate
                                </div>
                            </button>

                            <button style={{
                                padding: '10px',
                                border: 'none',
                                borderRadius: '50%',
                                backgroundColor: '#f0f0f0',
                                color: 'white',
                                cursor: 'pointer',
                                position: 'relative',
                                width: '40px',
                                height: '40px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <Trash style={{ width: '24px', height: '24px', color: 'black' }} />
                                <div style={{
                                    visibility: 'hidden',
                                    position: 'absolute',
                                    bottom: '100%',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    backgroundColor: '#333',
                                    color: '#fff',
                                    padding: '5px 10px',
                                    borderRadius: '4px',
                                    whiteSpace: 'nowrap',
                                    zIndex: 1,
                                    fontSize: '12px'
                                }}>
                                    Delete
                                </div>
                            </button>
                        </div>

                    </>


                </div>

                {/* Main Container */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    border: '5px solid black',
                    borderRadius: '8px',
                    width: '80%',  // Match width with the header
                    height: '80%',
                    backgroundColor: 'white',
                    boxSizing: 'border-box'
                }}>
                    <div style={{
                        flex: 1,
                        padding: '20px',
                        boxSizing: 'border-box'
                    }}>
                        {/* Image */}
                        <img
                            src="/images/image.jpg"
                            alt="Description of image"
                            style={{
                                width: '100%', // Adjust the width as needed
                                height: 'auto', // Maintain aspect ratio
                                marginBottom: '20px' // Space between image and text
                            }}
                        />


                    </div>


                    <div style={{
                        flex: 1,
                        padding: '20px',
                        boxSizing: 'border-box'
                    }}>
                        {/* Content for the second section */}
                        <Card className="w-[550px], h-[500px]">
                            <CardHeader>
                                <CardTitle>Question 2</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <form>
                                    <div className="flex justify-between ">
                                        <Label className="font-bold text-base">Question 2</Label>
                                        <span className="bg-gray-400 mb-4 rounded-lg">Verplicht</span>
                                    </div>

                                </form>
                            </CardContent>
                            <CardFooter className="flex justify-between">

                                <Button
                                    style={{
                                        backgroundColor: 'white',
                                        color: 'black',
                                        borderRadius: '50%', // Circle shape
                                        width: '50px',       // Adjust width as needed
                                        height: '50px',      // Adjust height to match width
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        border: '2px solid black', // Black border
                                        marginRight: '10px',
                                        cursor: 'pointer',
                                        transition: 'background-color 0.3s'
                                    }}
                                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'lightgray'}
                                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'white'}
                                >
                                    <ArrowLeft
                                        style={{
                                            color: 'black',
                                            fontWeight: 'bold',
                                            width: '24px', // Adjust to fit the button
                                            height: '24px' // Adjust to fit the button
                                        }}
                                    />
                                </Button>

                                <Button
                                    style={{
                                        backgroundColor: 'black',
                                        color: 'white',
                                        borderRadius: '25px', // Oval shape
                                        padding: '10px 20px',
                                        border: 'none',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        transition: 'background-color 0.3s'
                                    }}
                                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'gray'}
                                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'black'}
                                >
                                    <span style={{ marginRight: '8px' }}>Volgende</span>
                                    <ArrowRight
                                        style={{
                                            color: 'white',
                                            fontWeight: 'bold',
                                            width: '16px', // Adjust to fit the button
                                            height: '16px' // Adjust to fit the button
                                        }}
                                    />
                                </Button>

                            </CardFooter>

                        </Card>
                    </div>
                </div>
            </div>

{/* ////////////////////////PAGE-3(checkbox)Multiple select question//////////////////////////////////////////// */}

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: '100vh',
                padding: '20px',
                boxSizing: 'border-box'
            }}>
                {/* Header Section */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '80%',  // Set width to match the main container
                    marginBottom: '7px',
                    textAlign: 'left',
                    boxSizing: 'border-box'
                }}>
                    <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                        <h1 style={{ margin: 0, display: 'flex', alignItems: 'center', fontWeight: 'bold' }}>
                            Page3
                            <Pen style={{ marginLeft: '8px', height: '16px', width: '16px' }} />
                        </h1>
                    </div>

                    {/* //////////////////////////////////HEADER BUTTONS////////////////////////////////////////////// */}
                    <>

                        <div style={{
                            display: 'flex',  // Use flexbox to lay out buttons in a row
                            alignItems: 'center',  // Align items vertically in the center
                            gap: '10px'  // Optional: Adds space between buttons
                        }}>
                            <button style={{
                                padding: '10px',
                                border: 'none',
                                borderRadius: '50%',
                                backgroundColor: '#f0f0f0',
                                color: 'white',
                                cursor: 'pointer',
                                position: 'relative',
                                width: '40px',
                                height: '40px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <ChevronUp style={{ width: '24px', height: '24px', color: 'black' }} />
                                <div style={{
                                    visibility: 'hidden',
                                    position: 'absolute',
                                    bottom: '100%',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    backgroundColor: '#333',
                                    color: '#fff',
                                    padding: '5px 10px',
                                    borderRadius: '4px',
                                    whiteSpace: 'nowrap',
                                    zIndex: 1,
                                    fontSize: '12px'
                                }}>
                                    Page Up
                                </div>
                            </button>

                            <button style={{
                                padding: '10px',
                                border: 'none',
                                borderRadius: '50%',
                                backgroundColor: '#f0f0f0',
                                color: 'white',
                                cursor: 'pointer',
                                position: 'relative',
                                width: '40px',
                                height: '40px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <ChevronDown style={{ width: '24px', height: '24px', color: 'black' }} />
                                <div style={{
                                    visibility: 'hidden',
                                    position: 'absolute',
                                    bottom: '100%',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    backgroundColor: '#333',
                                    color: '#fff',
                                    padding: '5px 10px',
                                    borderRadius: '4px',
                                    whiteSpace: 'nowrap',
                                    zIndex: 1,
                                    fontSize: '12px'
                                }}>
                                    Page Down
                                </div>
                            </button>

                            <button style={{
                                padding: '10px',
                                border: 'none',
                                borderRadius: '50%',
                                backgroundColor: '#f0f0f0',
                                color: 'white',
                                cursor: 'pointer',
                                position: 'relative',
                                width: '40px',
                                height: '40px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <Settings style={{ width: '24px', height: '24px', color: 'black' }} />
                                <div style={{
                                    visibility: 'hidden',
                                    position: 'absolute',
                                    bottom: '100%',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    backgroundColor: '#333',
                                    color: '#fff',
                                    padding: '5px 10px',
                                    borderRadius: '4px',
                                    whiteSpace: 'nowrap',
                                    zIndex: 1,
                                    fontSize: '12px'
                                }}>
                                    Settings
                                </div>
                            </button>

                            <button style={{
                                padding: '10px',
                                border: 'none',
                                borderRadius: '50%',
                                backgroundColor: '#f0f0f0',
                                color: 'white',
                                cursor: 'pointer',
                                position: 'relative',
                                width: '40px',
                                height: '40px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <Copy style={{ width: '24px', height: '24px', color: 'black' }} />
                                <div style={{
                                    visibility: 'hidden',
                                    position: 'absolute',
                                    bottom: '100%',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    backgroundColor: '#333',
                                    color: '#fff',
                                    padding: '5px 10px',
                                    borderRadius: '4px',
                                    whiteSpace: 'nowrap',
                                    zIndex: 1,
                                    fontSize: '12px'
                                }}>
                                    Duplicate
                                </div>
                            </button>

                            <button style={{
                                padding: '10px',
                                border: 'none',
                                borderRadius: '50%',
                                backgroundColor: '#f0f0f0',
                                color: 'white',
                                cursor: 'pointer',
                                position: 'relative',
                                width: '40px',
                                height: '40px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <Trash style={{ width: '24px', height: '24px', color: 'black' }} />
                                <div style={{
                                    visibility: 'hidden',
                                    position: 'absolute',
                                    bottom: '100%',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    backgroundColor: '#333',
                                    color: '#fff',
                                    padding: '5px 10px',
                                    borderRadius: '4px',
                                    whiteSpace: 'nowrap',
                                    zIndex: 1,
                                    fontSize: '12px'
                                }}>
                                    Delete
                                </div>
                            </button>
                        </div>

                    </>


                </div>

                {/* Main Container */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    border: '5px solid black',
                    borderRadius: '8px',
                    width: '80%',  // Match width with the header
                    height: '80%',
                    backgroundColor: 'white',
                    boxSizing: 'border-box'
                }}>
                    <div style={{
                        flex: 1,
                        padding: '20px',
                        boxSizing: 'border-box'
                    }}>
                        {/* Image */}
                        <img
                            src="/images/image.jpg"
                            alt="Description of image"
                            style={{
                                width: '100%', // Adjust the width as needed
                                height: 'auto', // Maintain aspect ratio
                                marginBottom: '20px' // Space between image and text
                            }}
                        />


                    </div>


                    <div style={{
                        flex: 1,
                        padding: '20px',
                        boxSizing: 'border-box'
                    }}>
                        {/* Content for the second section */}
                        <Card className="w-[550px], h-[500px]">
                            <CardHeader>
                                <CardTitle>Question 3</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <form>
                                    <div className="flex flex-col space-y-2">
                                        <div className="p-4 rounded-lg border border-gray-300 flex items-center space-x-80">
                                            <div className="flex items-center space-x-2">
                                                <input type="checkbox" id="checkbox1" className="h-6 w-6" />
                                                <Label htmlFor="checkbox1">Answer A</Label>
                                            </div>
                                            <img
                                                src="your-image-url.jpg"
                                                className="w-8 ml-6 h-8 object-contain"
                                                alt="Icon for Answer A"
                                            />
                                        </div>
                                        <div className="p-4 rounded-lg border border-gray-300">
                                            <div className="flex items-center space-x-2">
                                                <input type="checkbox" id="checkbox2" className="h-6 w-6" />
                                                <Label htmlFor="checkbox2">Answer B</Label>
                                            </div>
                                        </div>
                                        <div className="p-4 rounded-lg border border-gray-300">
                                            <div className="flex items-center space-x-2">
                                                <input type="checkbox" id="checkbox3" className="h-6 w-6" />
                                                <Label htmlFor="checkbox3">Answer C</Label>
                                            </div>
                                        </div>
                                    </div>


                                </form>
                            </CardContent>
                            <CardFooter className="flex justify-between">

                                <Button
                                    style={{
                                        backgroundColor: 'white',
                                        color: 'black',
                                        borderRadius: '50%', // Circle shape
                                        width: '50px',       // Adjust width as needed
                                        height: '50px',      // Adjust height to match width
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        border: '2px solid black', // Black border
                                        marginRight: '10px',
                                        cursor: 'pointer',
                                        transition: 'background-color 0.3s'
                                    }}
                                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'lightgray'}
                                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'white'}
                                >
                                    <ArrowLeft
                                        style={{
                                            color: 'black',
                                            fontWeight: 'bold',
                                            width: '24px', // Adjust to fit the button
                                            height: '24px' // Adjust to fit the button
                                        }}
                                    />
                                </Button>

                                <Button
                                    style={{
                                        backgroundColor: 'black',
                                        color: 'white',
                                        borderRadius: '25px', // Oval shape
                                        padding: '10px 20px',
                                        border: 'none',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        transition: 'background-color 0.3s'
                                    }}
                                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'gray'}
                                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'black'}
                                >
                                    <span style={{ marginRight: '8px' }}>Volgende</span>
                                    <ArrowRight
                                        style={{
                                            color: 'white',
                                            fontWeight: 'bold',
                                            width: '16px', // Adjust to fit the button
                                            height: '16px' // Adjust to fit the button
                                        }}
                                    />
                                </Button>

                            </CardFooter>

                        </Card>
                    </div>
                </div>
            </div>
         
{/* ///////////////////////////////ADD PAGE PLUS BUTTON////////////////////////////////             */}
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                }}
            >
                <span style={{ marginTop: '8px', fontSize: '12px' }}>Add Page</span>
                <button
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        border: '2px solid black',
                        backgroundColor: 'white',
                        padding: '8px',
                        cursor: 'pointer',
                    }}
                >
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="plus"
                        className="svg-inline--fa fa-plus fa-lg"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        style={{
                            width: '24px',
                            height: '24px',
                            fill: 'currentColor',
                        }}
                    >
                        <path
                            fill="currentColor"
                            d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
                        />
                    </svg>
                </button>
                
            </div>
        </>

    );
}


