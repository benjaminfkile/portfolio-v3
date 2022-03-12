import { FunctionComponent, useContext } from "react"
import { HexColorPicker } from "react-colorful"
import { useDispatch, useSelector } from "react-redux"
import { SocketContext } from "../../Context/socket"
import { setTheme } from "../../Redux/Slices/themeSlice"

import "./EditTheme.css"

const EditTheme: FunctionComponent = () => {
    const colorSlots = ["PalleteColor1", "PalleteColor2", "PalleteColor3", "PalleteColor4"]
    const theme = useSelector((state: any) => state.themeSlice.theme)
    const socket = useContext(SocketContext)
    const dispatch = useDispatch()
    let timeout: any

    const handleColorChange = (event: string, index: number, all: boolean) => {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            let updatedTheme = JSON.parse(JSON.stringify(theme))
            updatedTheme[colorSlots[index]] = event
            // console.log(updatedTheme)
            if (all) {
                socket.emit("theme", updatedTheme)
                console.log("all")
            } else {
                socket.emit(socket.id, updatedTheme)
                console.log("single")
            }
            dispatch(setTheme(updatedTheme))
        }, 100);
    }

    return (
        <div className="EditTheme">
            <div className="EditThemeColorPickers">
                {colorSlots.map((slot, index: number) =>
                    <div className="EditThemeColorPicker" key={slot}>
                        <HexColorPicker color={theme[colorSlots[index]]} onChange={(event) => handleColorChange(event, index, false)} />
                    </div>)}
            </div>
            <div className="EditThemeColorPickers">
                {colorSlots.map((slot, index: number) =>
                    <div className="EditThemeColorPicker" key={slot}>
                        <HexColorPicker color={theme[colorSlots[index]]} onChange={(event) => handleColorChange(event, index, true)} />
                    </div>)}
            </div>
        </div>
    )
}

export default EditTheme
