import { allPlaylists, songs as allSongs } from "@/lib/data";

export async function GET({params, request}){
    // GET THE ID FROM THE URL search params
    const { url } = request
    const urlObject = new URL(url)
    const id = urlObject.searchParams.get("id")

    //get the info playlist

    const playlist = allPlaylists.find(playlist => playlist.id == id)
    const songs = allSongs.filter(song => song.albumId == playlist?.albumId)

    return new Response(JSON.stringify({playlist, songs}), {
        headers: {
            "Content-Type": "application/json"
        }
    })
}