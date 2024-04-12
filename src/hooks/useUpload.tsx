import { useState } from 'react';

const cloudName = import.meta.env.VITE_CLOUD;
const uploadPreset = import.meta.env.VITE_UPLOAD_PRESET;

const useUpload = () => {
  const [uploading, setUploading] = useState(false);
  const [uploadComplete, setUploadComplete] = useState(false);
  const [cldResponse, setCldResponse] = useState(null);

  const uploadFile = async (file: any) => {
    if (!file) {
      console.error('Please select a file.');
      return;
    }

    const uniqueUploadId = generateUniqueUploadId();
    const chunkSize = 5 * 1024 * 1024;
    const totalChunks = Math.ceil(file.size / chunkSize);
    let currentChunk = 0;

    setUploading(true);

    const uploadChunk = async (start: any, end: any) => {
      const formData = new FormData();
      formData.append('file', file.slice(start, end));
      formData.append('cloud_name', cloudName);
      formData.append('upload_preset', uploadPreset);
      const contentRange = `bytes ${start}-${end - 1}/${file.size}`;

      console.log(
        `Uploading chunk for uniqueUploadId: ${uniqueUploadId}; start: ${start}, end: ${end - 1}`,
      );

      try {
        const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`, {
          method: 'POST',
          body: formData,
          headers: {
            'X-Unique-Upload-Id': uniqueUploadId,
            'Content-Range': contentRange,
          },
        });

        if (!response.ok) {
          throw new Error('Chunk upload failed.');
        }

        currentChunk++;

        if (currentChunk < totalChunks) {
          const nextStart = currentChunk * chunkSize;
          const nextEnd = Math.min(nextStart + chunkSize, file.size);
          uploadChunk(nextStart, nextEnd);
        } else {
          setUploadComplete(true);
          setUploading(false);

          const fetchResponse = await response.json();
          setCldResponse(fetchResponse);
          console.info('File upload complete.');
        }
      } catch (error) {
        console.error('Error uploading chunk:', error);
        setUploading(false);
      }
    };

    const start = 0;
    const end = Math.min(chunkSize, file?.size);
    uploadChunk(start, end);
  };

  const generateUniqueUploadId = () => {
    return `uqid-${Date.now()}`;
  };
  const handleFileChange = async (event: any) => {
    // await setFile(event.target.files[0]);
    await uploadFile(event.target.files[0]);
  };

  return {
    uploadFile,
    uploading,
    response: cldResponse as any,
    handleFileChange,
  };
};

export default useUpload;
