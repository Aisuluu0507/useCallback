import React, { useState, useCallback } from 'react';

function CheckBox() {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = useCallback((event) => {
    setIsChecked(event.target.checked);
  }, []);

  return (
    <div className='checkbox'>
      <label className='text'>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        Click me...🥰
      </label>
    </div>
  );
}

export default CheckBox;
