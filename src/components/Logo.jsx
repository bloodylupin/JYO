export default function Logo({ square, invert }) {
    return <figure>
        {square ?
            <img src={!invert ? "img/jack_yolo-logo.svg" : "img/jack_yolo-logo-white.svg"} width={50} height={50} alt="Jack Yolo Logo" /> :
            <img src={!invert ? "img/jack_yolo_odissey-logo.svg" : "img/jack_yolo_odissey-logo-white.svg"} width={250} height={25} alt="Jack Yolo Odissey Logo" />
        }
    </figure>
}