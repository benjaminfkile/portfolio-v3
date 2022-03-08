import { Component } from "react"
import { v4 as uuidv4 } from 'uuid'
import "./JelloText.css"

interface JelloTextProps {
    text: string
    fontSize: number
    whiteSpacing: string
    color: string
    animationSpeed: number
}

interface JelloTextCharTypes {
    id: string
    value?: string | null
    display?: string
}

interface JelloTextState {
    textArray: Array<JelloTextCharTypes> | []
}

class JelloText extends Component<JelloTextProps, JelloTextState> {

    animationIndex = -1

    state = {
        textArray: []
    }

    componentDidMount() {
        this.buildTextArray()
    }

    buildTextArray = () => {
        let temp = this.props.text.split("")
        let arr = []
        for (let i = 0; i < temp.length; i++) {
            let str = temp[i]
            let key = uuidv4()
            if (str.trim().length > 0) {
                arr.push({ id: key, value: str, display: "none" })
            } else {
                arr.push({ id: key })
            }
        }
        this.setState({ textArray: arr })
        setTimeout(() => {
            this.animateText()
        })
    }

    animateText = () => {
        this.animationIndex++
        const index = this.animationIndex
        const arr: Array<JelloTextCharTypes> | [] = this.state.textArray
        const animationSpeed = this.props.animationSpeed
        setTimeout(() => {
            if (index < arr.length) {
                let elem = document.getElementById(arr[index].id)
                if (elem) {
                    elem.style.display = "block"
                    this.animateText()
                }
            }
        }, animationSpeed)
    }

    render() {

        const props = this.props
        const textArray = this.state.textArray

        return (
            <div className="JelloText" id="foo" >
                {textArray.map((item: any) =>
                    <div className="JelloTextWrapper" key={item.id}>
                        {item.value && <span className="JelloTextChar" id={item.id} style={{ "fontSize": props.fontSize, "color": props.color, display: item.display }} >{item.value}</span>}
                        {!item.value && <span className="JelloTextSpace" id={item.id} style={{ "fontSize": props.fontSize, "marginRight": props.whiteSpacing, display: item.display }}></span>}
                    </div>
                )}
            </div>
        )
    }
}

export default JelloText