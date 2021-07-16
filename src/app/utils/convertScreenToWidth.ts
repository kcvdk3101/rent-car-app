
export default function convertScreenToWidth(screen: String) {
    var arr = screen.split('px')
    return parseInt(arr[0]);
}