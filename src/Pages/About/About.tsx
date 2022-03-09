import { FunctionComponent } from "react"
import { useSelector } from "react-redux"
import JelloText from "../../Utilis/JelloText/JelloText"
import "./About.css"

const About: FunctionComponent = () => {
    const theme = useSelector((state: any) => state.themeSlice.theme)
    return (
        <div className="About">
            <div className="AboutHeader">
                <JelloText
                    text="Heading 1"
                    fontSize={50}
                    whiteSpacing="8px"
                    color={theme.PalleteColor2}
                    animationSpeed={75}
                />
                <JelloText
                    text="Heading 2"
                    fontSize={30}
                    whiteSpacing="8px"
                    color={theme.PalleteColor3}
                    animationSpeed={75}
                />                <JelloText
                    text="text"
                    fontSize={20}
                    whiteSpacing="8px"
                    color={theme.PalleteColor4}
                    animationSpeed={75}
                />
            </div>
        </div>
    )
}

export default About