import { useState } from 'react';
import { Check } from 'phosphor-react';
import { clsx } from 'clsx';

export interface CheckboxProps {};

export function Checkbox({}: CheckboxProps) {
    const [checked, setChecked] = useState(true);

    return (
        <label className="flex items-center justify-items-center w-6 h-6 p-[2px] bg-gray-800 rounded">
            <input
                type="checkbox"
                style={{ display: 'none' }}
                onChange={event => setChecked(event.target.checked)}
            />
            {checked && <Check
                weight="bold"
                className="h-5 w-5 text-cyan-500 justify-self-center"
            />}
        </label>
    );
};
