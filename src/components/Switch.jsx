import useToggle from '../hooks/useToggle';

const Switch = () => {
    const [isOn, toggleIsOn] = useToggle(false);

    return (
        <div>
            <label htmlFor="switch">
                <input
                    type="checkbox"
                    id="switch"
                    checked={isOn}
                    onChange={toggleIsOn}
                />
                <div className="slider round"></div>
            </label>

            { isOn ? "On" : "Off" }
        </div>
    );
};

export default Switch;
