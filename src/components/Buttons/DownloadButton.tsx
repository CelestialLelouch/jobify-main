import React from "react"


interface prop {
    downloadEvent : () => void
}
const DownloadButton: React.FC<prop>= ({downloadEvent}) => {
    return (
        <div
            style={{
                position: "fixed",
                right: '0',
                zIndex: '10'
            }}
        >
            <button
                style={{
                    width: '100px',
                    height: '50px',
                    borderRadius: '15px',
                }} 
                
                onClick={downloadEvent}
            >
                DOWNLOAD
            </button>
        </div>
    )
}

export default DownloadButton;