import { FunctionComponent, useContext } from "react";
import { HexColorPicker } from "react-colorful";
import { useSelector } from "react-redux";
import { SocketContext } from "../../../Context/socket";
// import { setTheme } from "../../../Redux/Slices/themeSlice";
import "./EditTheme.css"

interface EditThemeProps {
    
}
 
const EditTheme: FunctionComponent<EditThemeProps> = () => {
    const colorSlots = ["PalleteColor1","PalleteColor2","PalleteColor3","PalleteColor4"]
    const theme = useSelector((state: any) => state.themeSlice.theme)
    const socket = useContext(SocketContext)

    let colorInput = {color: "#aabbcc", slot: colorSlots[0]}
    
    const handleColorChange = (color: string) =>{
        let newTheme = JSON.parse(JSON.stringify(theme))
        newTheme[colorInput.slot] = color
        socket.emit("theme", newTheme);
        // console.log(newTheme)
    }



    return (  
        <div className="EditTheme">
            <HexColorPicker color={colorInput.color} onChange={handleColorChange} />
        </div>
    )
}
 
export default EditTheme;

