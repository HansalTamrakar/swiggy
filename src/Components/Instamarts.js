
import React from 'react'
import { useState } from 'react'
const Section = ({ title, description, isVisible, setData, setDataa }) => {



    return <div className='border border-black p-2 m-2'>
        <h3 className='font-bold text-3xl'>{title}</h3>
        {
            isVisible ? <button className=' cursor-pointer' onClick={() => {
                setDataa()


            }}>Hide</button> : <button className=' cursor-pointer' onClick={() => {
                setData()
            }}>Show</button>

        }

        <p>{isVisible && description}</p>
    </div>
}
const Instamarts = () => {
    const [sectionConfig, setSectionConfig] = useState({
        HANSAL: false,
        PRIYA: false,
        HANSALPRIYA: false

    })
    return (
        <div>
            <h1 className='text-3xl font-bold p-2 m-2'>Instamart</h1>
            <Section title={"ABOUT "} description={" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. "}
                isVisible={sectionConfig.HANSAL}
                setData={() => {
                    setSectionConfig({
                        HANSAL: true,
                        PRIYA: false,
                        HANSALPRIYA: false,
                    })
                }}
                setDataa={() => {
                    setSectionConfig({
                        HANSAL: false,
                        PRIYA: false,
                        HANSALPRIYA: false,
                    })


                }
                } />
            <Section title={"SUPPORT "} description={" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
                isVisible={sectionConfig.PRIYA}
                setData={() => {
                    setSectionConfig({
                        HANSAL: false,
                        PRIYA: true,
                        HANSALPRIYA: false,
                    })

                }}
                setDataa={() => {
                    setSectionConfig({
                        HANSAL: false,
                        PRIYA: false,
                        HANSALPRIYA: false,
                    })


                }
                } />
            <Section title={"SALARY"} description={" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
                isVisible={sectionConfig.HANSALPRIYA}
                setData={() => {
                    setSectionConfig({
                        HANSAL: false,
                        PRIYA: false,
                        HANSALPRIYA: true,
                    })

                }}
                setDataa={() => {
                    setSectionConfig({
                        HANSAL: false,
                        PRIYA: false,
                        HANSALPRIYA: false,
                    })


                }
                } />

        </div>
    )
}
export default Instamarts;
