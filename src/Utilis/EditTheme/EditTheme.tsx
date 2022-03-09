import { FunctionComponent, useContext } from "react"
import { HexColorPicker } from "react-colorful"
import { useSelector } from "react-redux"
import { SocketContext } from "../../Context/socket"
import "./EditTheme.css"

const EditTheme: FunctionComponent = () => {
    const colorSlots = ["PalleteColor1", "PalleteColor2", "PalleteColor3", "PalleteColor4"]
    const theme = useSelector((state: any) => state.themeSlice.theme)
    const socket = useContext(SocketContext)
    let timeout: any

    const handleColorChange = (color: string, index: number) => {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            let updatedTheme = JSON.parse(JSON.stringify(theme))
            updatedTheme[colorSlots[index]] = color
            socket.emit("theme", updatedTheme)
        }, 100);
    }

    return (
        <div className="EditTheme">
            <div className="EditThemeColorPickers">
                {colorSlots.map((slot, index: number) =>
                    <div className="EditThemeColorPicker" key={slot}>
                        <HexColorPicker color={theme[colorSlots[index]]} onChange={(e) => handleColorChange(e, index)} />
                    </div>)}
            </div>
        </div>
    )
}

export default EditTheme

