import React from 'react';

const VideoUpload = () => {
    return (
        <div>
            <h2 className="text-lg font-medium">Video</h2>
            <p>(không bắt buộc)</p>
            <input 
                type="text" 
                placeholder="Dán đường dẫn Youtube hoặc Tiktok" 
                className="border border-gray-300 p-2 w-full rounded" 
            />
        </div>
    );
};

export default VideoUpload;
