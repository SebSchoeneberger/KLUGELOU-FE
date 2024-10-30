import { useState, useEffect } from 'react';
import { updateStone } from '../../services/stoneAPI';

function UpdateCardModal({ isOpen, onClose, stone, onUpdate }) {
  const [formData, setFormData] = useState({
    name: '',
    imageUrl: '',
    namesOrigin: '',
    crystalSystem: '',
    starSign: '',
    chakra: '',
    element: '',
    charging: '',
    discharging: '',
  });

  useEffect(() => {
    if (stone) {
      const { name, imageUrl, namesOrigin, crystalSystem, starSign, chakra, element, charging, discharging } = stone;
      setFormData({ name, imageUrl, namesOrigin, crystalSystem, starSign, chakra, element, charging, discharging });
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
    const updatedStone = await updateStone(stone._id, formData);
    onUpdate(updatedStone);
    onClose();
    };


  if (!isOpen) return null;

  return (
    <dialog id="update_modal" open className="modal">
      <div className="modal-box bg-[#e0e2e6] text-customBlack">
        <h3 className="font-bold text-lg">Update Gemstone</h3>
        <form onSubmit={handleSubmit} className="py-4">
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name || ''}
              onChange={handleInputChange}
              className="input input-bordered w-full border-black border-solid border bg-white"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Image URL</label>
            <input
              type="url"
              name="imageUrl"
              value={formData.imageUrl || ''}
              onChange={handleInputChange}
              className="input input-bordered w-full border-black border-solid border bg-white"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Names Origin</label>
            <input
              type="text"
              name="namesOrigin"
              value={formData.namesOrigin || ''}
              onChange={handleInputChange}
              className="input input-bordered w-full border-black border-solid border bg-white"
            />
          </div>

          {/* Select dropdown for Crystal System */}
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Crystal System</label>
            <select
              name="crystalSystem"
              value={formData.crystalSystem || ''}
              onChange={handleInputChange}
              className="select select-bordered w-full border-black border-solid border bg-white"
            >
              <option value="">Select Crystal System</option>
              <option value="Trigonal">Trigonal</option>
              <option value="Monoclinic">Monoclinic</option>
              <option value="Hexagonal">Hexagonal</option>
              <option value="Cubic">Cubic</option>
              <option value="Amorphous">Amorphous</option>
              <option value="Rhombic">Rhombic</option>
              <option value="Triclinic">Triclinic</option>
              <option value="Tetragonal">Tetragonal</option>
            </select>
          </div>

          {/* Select dropdown for Star Sign */}
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Star Sign</label>
            <select
              name="starSign"
              value={formData.starSign || ''}
              onChange={handleInputChange}
              className="select select-bordered w-full border-black border-solid border bg-white"
            >
              <option value="">Select Star Sign</option>
              <option value="Libra">Libra</option>
              <option value="Capricorn">Capricorn</option>
              <option value="Virgo">Virgo</option>
              <option value="Scorpio">Scorpio</option>
              <option value="Cancer">Cancer</option>
              <option value="Aquarius">Aquarius</option>
              <option value="Aries">Aries</option>
              <option value="Taurus">Taurus</option>
              <option value="Pisces">Pisces</option>
              <option value="Gemini">Gemini</option>
              <option value="Sagittarius">Sagittarius</option>
              <option value="Leo">Leo</option>
            </select>
          </div>

          {/* Select dropdown for Chakra */}
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Chakra</label>
            <select
              name="chakra"
              value={formData.chakra || ''}
              onChange={handleInputChange}
              className="select select-bordered w-full border-black border-solid border bg-white"
            >
              <option value="">Select Chakra</option>
              <option value="Root">Root Chakra</option>
              <option value="Heart">Heart Chakra</option>
              <option value="Solar-plexus">Solar Plexus Chakra</option>
              <option value="Third-eye">Third Eye Chakra</option>
              <option value="Crown">Crown Chakra</option>
              <option value="Sacral">Sacral Chakra</option>
              <option value="Throat">Throat Chakra</option>
              <option value="All-chakras">All Chakras</option>
            </select>
          </div>

          {/* Select dropdown for Element */}
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Element</label>
            <select
              name="element"
              value={formData.element || ''}
              onChange={handleInputChange}
              className="select select-bordered w-full border-black border-solid border bg-white"
            >
              <option value="">Select Element</option>
              <option value="Water">Water</option>
              <option value="Air">Air</option>
              <option value="Earth">Earth</option>
              <option value="Fire">Fire</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Charging</label>
            <input
              type="text"
              name="charging"
              value={formData.charging || ''}
              onChange={handleInputChange}
              className="input input-bordered w-full border-black border-solid border bg-white"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Discharging</label>
            <input
              type="text"
              name="discharging"
              value={formData.discharging || ''}
              onChange={handleInputChange}
              className="input input-bordered w-full border-black border-solid border bg-white"
            />
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

export default UpdateCardModal;
