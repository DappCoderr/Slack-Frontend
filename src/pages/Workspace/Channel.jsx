import { useParams } from "react-router-dom"

const Channel = () => {
    const {channelId} = useParams()
    return(
        <h1>channel id: {channelId}</h1>
    )
}

export default Channel;