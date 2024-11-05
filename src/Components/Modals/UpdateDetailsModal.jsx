import React, { useState, useEffect, useRef } from 'react';
import { updateStone } from '../../services/stoneAPI';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

function UpdateDetailsModal({ isOpen, onClose, stone, onUpdate }) {
  const editorRef = useRef(null);
  const [quill, setQuill] = useState(null);
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (stone) {
      setDescription(stone.description || '');
    }
  }, [stone]);
  const toolbarOptions = [
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    ['bold', 'italic', 'underline'],
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'align': [] }],
    [{ 'script': 'sub' }, { 'script': 'super' }],
    [{ 'color': [] }, { 'background': [] }],
    ['blockquote'],
    ['clean']
  ];
  
  // Initialize Quill editor only once when modal is open
  useEffect(() => {
    if (isOpen && editorRef.current && !quill) {
      const quillInstance = new Quill(editorRef.current, {
        theme: 'snow',
        modules: { toolbar: toolbarOptions },
      });
      setQuill(quillInstance);

      // Update state with editor content on changes
      quillInstance.on('text-change', () => {
        setDescription(quillInstance.root.innerHTML);
      });
    }

    // Cleanup function to reset Quill instance when modal closes
    return () => {
      if (quill) {
        quill.off('text-change');
        setQuill(null);
      }
    };
  }, [isOpen, quill]);

  // Load the initial description into the editor once
  useEffect(() => {
    if (quill && description) {
      quill.root.innerHTML = description;
    }
  }, [quill, description]); // Only runs once after quill is initialized

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedData = { description };
    const updatedStone = await updateStone(stone._id, updatedData);
    onUpdate(updatedStone);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <dialog id="update_details_modal" open className="modal">
      <div className="modal-box bg-[#e0e2e6] text-customBlack w-[90%] max-w-3xl h-auto">
        <h3 className="font-bold text-lg">Update Stone Details</h3>
        <form onSubmit={handleSubmit} className="py-4">
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Description</label>
            <div ref={editorRef} className="h-full w-full border border-solid" />
          </div>
          <div className="modal-action">
            <button type="submit" className="btn btn-warning">Save Changes</button>
            <button type="button" className="btn" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </dialog>
  );
}

export default UpdateDetailsModal;



    





// import { useState, useEffect } from 'react';
// import { updateStone } from '../../services/stoneAPI';

// function UpdateDetailsModal({ isOpen, onClose, stone, onUpdate }) {
//   const [formData, setFormData] = useState({
//     description: '',
//     healingPotential: '',
//     howToUse: '',
//     otherInfo: ''
//   });

//   useEffect(() => {
//     if (stone) {
//       const { description, healingPotential, howToUse, otherInfo } = stone;
//       setFormData({
//         description: description || '',
//         healingPotential: Array.isArray(healingPotential) ? healingPotential.join('\n') : healingPotential || '',
//         howToUse: Array.isArray(howToUse) ? howToUse.join('\n') : howToUse || '',
//         otherInfo: Array.isArray(otherInfo) ? otherInfo.join('\n') : otherInfo || ''
//       });
//     }
//   }, [stone]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const updatedData = {
//       description: formData.description,
//       healingPotential: formData.healingPotential.includes('\n') ? formData.healingPotential.split('\n') : formData.healingPotential,
//       howToUse: formData.howToUse.includes('\n') ? formData.howToUse.split('\n') : formData.howToUse,
//       otherInfo: formData.otherInfo.includes('\n') ? formData.otherInfo.split('\n') : formData.otherInfo
//     };
//     const updatedStone = await updateStone(stone._id, updatedData);

//     onUpdate(updatedStone);
//     onClose();
//   };

//   npm i react-quill

//   return (
//     <dialog id="update_details_modal" open className="modal">
//       <div className="modal-box bg-[#e0e2e6] text-customBlack">
//         <h3 className="font-bold text-lg">Update Stone Details</h3>
//         <form onSubmit={handleSubmit} className="py-4">

//           {/* Description */}
//           <div className="mb-4">
//             <label className="block text-sm font-bold mb-2">Description</label>
//             <textarea
//               name="description"
//               value={formData.description || ''}
//               onChange={handleInputChange}
//               className="textarea textarea-bordered w-full border-black border-solid border bg-white"
//               rows="3"
//             />
//           </div>

//           {/* Healing Potential */}
//           <div className="mb-4">
//             <label className="block text-sm font-bold mb-2">Healing Potential</label>
//             <textarea
//               name="healingPotential"
//               value={formData.healingPotential || ''}
//               onChange={handleInputChange}
//               className="textarea textarea-bordered w-full border-black border-solid border bg-white"
//               placeholder="Enter each item on a new line"
//               rows="3"
//             />
//           </div>

//           {/* How to Use */}
//           <div className="mb-4">
//             <label className="block text-sm font-bold mb-2">How to Use</label>
//             <textarea
//               name="howToUse"
//               value={formData.howToUse || ''}
//               onChange={handleInputChange}
//               className="textarea textarea-bordered w-full border-black border-solid border bg-white"
//               placeholder="Enter each item on a new line"
//               rows="3"
//             />
//           </div>

//           {/* Other Info */}
//           <div className="mb-4">
//             <label className="block text-sm font-bold mb-2">Other Info</label>
//             <textarea
//               name="otherInfo"
//               value={formData.otherInfo || ''}
//               onChange={handleInputChange}
//               className="textarea textarea-bordered w-full border-black border-solid border bg-white"
//               placeholder="Enter each item on a new line"
//               rows="3"
//             />
//           </div>

//           {/* Modal Actions */}
//           <div className="modal-action">
//             <button type="submit" className="btn btn-warning">Save Changes</button>
//             <button type="button" className="btn" onClick={onClose}>Cancel</button>
//           </div>
//         </form>
//       </div>
//     </dialog>
//   );
// }

// export default UpdateDetailsModal;
