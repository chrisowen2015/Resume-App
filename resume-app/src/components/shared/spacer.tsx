
// Takes an integer height input and outputs a div with that height
export default function Spacer({height}: { height: number }) {
    return (
        <div style={{height: height}}></div>
    );
}