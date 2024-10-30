import { useState, useEffect } from 'react';
import { updateStone } from '../../services/stoneAPI';

function UpdateDetailsModal({ isOpen, onClose, stone, onUpdate }) {
  const [formData, setFormData] = useState({
    description: '',
    healingPotential: '',
    howToUse: '',
    otherInfo: ''
  });

  useEffect(() => {
    if (stone) {
      const { description, healingPotential, howToUse, otherInfo } = stone;
      setFormData({
        description: description || '',
        healingPotential: Array.isArray(healingPotential) ? healingPotential.join('\n') : healingPotential || '',
        howToUse: Array.isArray(howToUse) ? howToUse.join('\n') : howToUse || '',
        otherInfo: Array.isArray(otherInfo) ? otherInfo.join('\n') : otherInfo || ''
      });
    }
  }, [stone]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedData = {
      description: formData.description,
      healingPotential: formData.healingPotential.includes('\n') ? formData.healingPotential.split('\n') : formData.healingPotential,
      howToUse: formData.howToUse.includes('\n') ? formData.howToUse.split('\n') : formData.howToUse,
      otherInfo: formData.otherInfo.includes('\n') ? formData.otherInfo.split('\n') : formData.otherInfo
    };
    const updatedStone = await updateStone(stone._id, updatedData);

    onUpdate(updatedStone);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <dialog id="update_details_modal" open className="modal">
      <div className="modal-box bg-[#e0e2e6] text-customBlack">
        <h3 className="font-bold text-lg">Update Stone Details</h3>
        <form onSubmit={handleSubmit} className="py-4">

          {/* Description */}
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Description</label>
            <textarea
              name="description"
              value={formData.description || ''}
              onChange={handleInputChange}
              className="textarea textarea-bordered w-full border-black border-solid border bg-white"
              rows="3"
            />
          </div>

          {/* Healing Potential */}
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Healing Potential</label>
            <textarea
              name="healingPotential"
              value={formData.healingPotential || ''}
              onChange={handleInputChange}
              className="textarea textarea-bordered w-full border-black border-solid border bg-white"
              placeholder="Enter each item on a new line"
              rows="3"
            />
          </div>

          {/* How to Use */}
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">How to Use</label>
            <textarea
              name="howToUse"
              value={formData.howToUse || ''}
              onChange={handleInputChange}
              className="textarea textarea-bordered w-full border-black border-solid border bg-white"
              placeholder="Enter each item on a new line"
              rows="3"
            />
          </div>

          {/* Other Info */}
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Other Info</label>
            <textarea
              name="otherInfo"
              value={formData.otherInfo || ''}
              onChange={handleInputChange}
              className="textarea textarea-bordered w-full border-black border-solid border bg-white"
              placeholder="Enter each item on a new line"
              rows="3"
            />
          </div>

          {/* Modal Actions */}
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
