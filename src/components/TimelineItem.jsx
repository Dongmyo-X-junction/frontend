// ref: https://unsplash.com/documentation#supported-parameters
const thumbnailOptions = {
    // 최대 화면에 160px 정도 크기로 나오는데
    // 레티나 디스플레이 고려해서 대략 2배 크기로 요청함
    w: 300,
    h: 300,
    fit: "crop",
    crop: "faces"
}

const q = new URLSearchParams(thumbnailOptions).toString()

export default function Thumbnail({ imageUrl }) {
    return (
        <img src={`${imageUrl}&${q}`} alt="thumbnail"></img>
    )
}