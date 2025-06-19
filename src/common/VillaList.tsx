import type {VillaType} from "../model/VillaType.ts";
import LazyImage from "./LazyImage.tsx";

const SCROLL_POSITION = 'scroll-position';
const ELEMENT_ID = 'container'

export default function VillaList(props: { villas: VillaType[] }) {
    const {villas} = props;
    return <div id={ELEMENT_ID} style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        height: '100%',
        overflow: 'auto',
        paddingTop: '1rem'
    }} >
        {villas.map(villa => {
            return <div key={villa.id}  style={{
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                width: '175px',
                height: '175px',
                marginBottom: '1rem',
                viewTransitionName : `${villa.id}`
            }} className={`from`}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                    overflow: 'hidden',
                    backgroundColor: 'whitesmoke',
                    boxShadow: '0 4px 5px 0 rgba(0, 0, 0, 0.2)',
                    borderRadius: '5px'
                }}>
                    <a href={`./villa/${villa.id}`} onClick={() => {
                        const container = document.getElementById(ELEMENT_ID)!;
                        localStorage.setItem(SCROLL_POSITION,container.scrollTop.toString(10))
                    }} >
                        <LazyImage src={`/assets/${villa.id}/cover.jpg`} alt="A bird." width={175} height={175}
                             />
                    </a>
                </div>
            </div>
        })}
    </div>
}
