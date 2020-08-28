import React, { Component } from 'react'
import { Modal, ModalHeader, ModalBody, FormGroup, Label} from 'reactstrap'
import './MemeCreator.scss'

const photos = [
    { src: '/images/vict-baby.png' },
    { src: '/images/ned.jpeg' },
    { src: '/images/devilgirl.jpg' },
    { src: '/images/trump.jpg' },
    { src: '/images/one-does-not.jpg' },
    { src: '/images/dank.png' },
    { src: '/images/boy.png' },
    { src: '/images/sad.png' },
    { src: '/images/wolf.png' },
    { src: '/images/fry.jpg' },
    { src: '/images/jobs.jpg' },
    { src: '/images/phone.jpg' },
    { src: '/images/oldie.png' },
    { src: '/images/image.png' },
    { src: '/images/doubt.png' },
    { src: '/images/crying.png' },
    { src: '/images/sponge.png' },
    { src: '/images/dog.png' },
    { src: '/images/frust.png' },
    { src: '/images/web.png' },
    { src: '/images/penguin.png' },
    { src: '/images/smudge.png' },
    { src: '/images/MockingSpongebob.jpg' },
    { src: '/images/patrick.jpg' },
    { src: '/images/loungeCat.jpg' },
    { src: '/images/drake.jpg' },
    { src: '/images/Grumpy-Cat-Bed.jpg' },
    { src: '/images/jim.jpg' }
]

const initialState = {
    toptext: "",
    bottomtext: "",
    isTopDragging: false,
    isBottomDragging: false,
    topY: "10%",
    topX: "50%",
    bottomX: "50%",
    bottomY: "90%"
}

class MemeCreator extends Component {

    constructor() {
        super()
        this.state = {
            currentImage: 0,
            modalIsOpen: false,
            currentImagebase64: null,
            ...initialState
        }
    }

    openImage = (i) => {
        const img = photos[i]
        const base_image = new Image()
        base_image.src = img.src
        const base64 = this.getBase64Image(base_image)
        this.setState(prevState => ({
            currentImage: i,
            modalIsOpen: !prevState.modalIsOpen,
            currentImagebase64: base64,
            ...initialState
        }))
    }

    toggle = () => {
        this.setState(prevState => ({
            modalIsOpen: !prevState.modalIsOpen
        }))
    }

    changeText = (e) => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        })
    }

    getStateObj = (e, type) => {
        let rect = this.imageRef.getBoundingClientRect()
        const xOffset = e.clientX - rect.left
        const yOffset = e.clientY - rect.top
        let stateObj = {}
        if (type === "bottom") {
            stateObj = {
                isBottomDragging: true,
                isTopDragging: false,
                bottomX: `${xOffset}px`,
                bottomY: `${yOffset}px`
            }
        } else if (type === "top") {
            stateObj = {
                isTopDragging: true,
                isBottomDragging: false,
                topX: `${xOffset}px`,
                topY: `${yOffset}px`
            }
        }
        return stateObj
    }

    handleMouseDown = (e, type) => {
        const stateObj = this.getStateObj(e, type)
        document.addEventListener('mousemove', (e) => this.handleMouseMove(e, type))
        this.setState({
            ...stateObj
        })
    }

    handleMouseMove = (e, type) => {
        if (this.state.isTopDragging || this.state.isBottomDragging) {
            let stateObj = {}
            if (type === "bottom" && this.state.isBottomDragging) {
                stateObj = this.getStateObj(e, type)
            } else if (type === "top" && this.state.isTopDragging) {
                stateObj = this.getStateObj(e, type)
            }
            this.setState({
                ...stateObj
            })
        }
    }

    handleMouseUp = (e, type) => {
        document.removeEventListener('mousemove', this.handleMouseMove)
        this.setState({
            isTopDragging: false,
            isBottomDragging: false
        })
    }

    convertSvgtoImage = () => {
        const svg = this.svgRef
        let svgData = new XMLSerializer().serializeToString(svg)
        const canvas = document.createElement("canvas")
        canvas.setAttribute("id", "canvas")
        const svgSize = svg.getBoundingClientRect()
        canvas.width = svgSize.width
        canvas.height = svgSize.height
        const img = document.createElement("img")
        img.setAttribute("src", "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svgData))))
        img.onload = function () {
            canvas.getContext("2d").drawImage(img, 0, 0)
            const canvasdata = canvas.toDataURL("image/png")
            const a = document.createElement("a")
            a.download = "meme.png"
            a.href = canvasdata
            document.body.appendChild(a)
            a.click()
        }
    }

    getBase64Image(img) {
        var canvas = document.createElement("canvas")
        canvas.width = img.width
        canvas.height = img.height
        var ctx = canvas.getContext("2d")
        ctx.drawImage(img, 0, 0)
        var dataURL = canvas.toDataURL("image/png")
        return dataURL
    }

    render() {
        const img = photos[this.state.currentImage]
        const base_img = new Image()
        base_img.src = img.src
        var wrh = base_img.width / base_img.height
        var newWidth = 600
        var newHeight = newWidth / wrh
        const textStyle = {
            fontFamily: "Impact",
            fontSize: "50px",
            textTransform: "uppercase",
            fill: "#FFF",
            stroke: "#000",
            userSelect: "none"
        }

        return (
            <div>
                <div className="main-content">
                    <div className="content">
                        {photos.map((img, i) => (
                            <div className="image-holder" key={img.src}>
                                <span className="meme-top-caption">Top text</span>
                                <img
                                    style={{
                                        width: "100%",
                                        cursor: "pointer",
                                        height: "100%"
                                    }}
                                    alt={i}
                                    src={img.src}
                                    onClick={() => this.openImage(i)}
                                    role="presentation" />
                                <span className="meme-bottom-caption">Bottom text</span>
                            </div>
                        ))}
                    </div>
                    <Modal className="meme-gen-modal" isOpen={this.state.modalIsOpen}>
                        <ModalHeader toggle={this.toggle}>Make-a-Meme</ModalHeader>
                        <ModalBody>
                            <svg
                                width={newWidth}
                                id="svg_ref"
                                height={newHeight}
                                ref={el => { this.svgRef = el }}
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink">
                                <image
                                    ref={el => { this.imageRef = el }}
                                    xlinkHref={this.state.currentImagebase64}
                                    height={newHeight}
                                    width={newWidth}
                                />
                                <text
                                    style={{ ...textStyle, zIndex: this.state.isTopDragging ? 4 : 1 }}
                                    x={this.state.topX}
                                    y={this.state.topY}
                                    dominantBaseline="middle"
                                    textAnchor="middle"
                                    onMouseDown={e => this.handleMouseDown(e, 'top')}
                                    onMouseUp={e => this.handleMouseUp(e, 'top')}
                                >{this.state.toptext}</text>
                                <text
                                    style={textStyle}
                                    dominantBaseline="middle"
                                    textAnchor="middle"
                                    x={this.state.bottomX}
                                    y={this.state.bottomY}
                                    onMouseDown={e => this.handleMouseDown(e, 'bottom')}
                                    onMouseUp={e => this.handleMouseUp(e, 'bottom')}
                                >{this.state.bottomtext}</text>
                            </svg>
                            <div className="meme-form">
                                <FormGroup>
                                    <Label for="toptext">Top Text</Label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="toptext"
                                        id="toptext"
                                        placeholder="Add text to the top"
                                        onChange={this.changeText} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="bottomtext">Bottom Text</Label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="bottomtext"
                                        id="bottomtext"
                                        placeholder="Add text to the bottom"
                                        onChange={this.changeText} />
                                </FormGroup>
                                <button onClick={() => this.convertSvgtoImage()} className="btn- btn-primary">Download Meme!</button>
                            </div>
                        </ModalBody>
                    </Modal>
                </div>
            </div>
        )
    }
}

export default MemeCreator