import challengeSize from "../helpers/challengeSize"
import { foodImages } from "../helpers/images"

const Home = _ => {
    return (
        <section
            className="text-success d-flex gap-3 flex-column"
        >
            <section
                className="text-background text-center rounded m-auto p-3 user-select-none border border-success border-3"
            >
                <h1
                    className="fw-bolder"
                >Tyrone's Tiles</h1>
                <article
                
                >
                    <p>
                        Tyrone Osaurus Rex the T-Rex is very hungry but all of his food is stuck under tiles. Can you feed him in time?
                    </p>
                </article>
            </section>
            <section
                className="text-background text-center rounded m-auto p-3 user-select-none border border-success border-3"
            >
                <h1
                    className="fw-bolder"
                >Casual</h1>
                <article
                
                >
                    <p>
                        Feed Tyrone Osaurus Rex casually by matching tiles at your own pace and at the difficulty you enjoy. Just be careful about which match you make, if you get it wrong then you'll hurt Tyrone.
                    </p>
                </article>
            </section>
            <section
                className="text-background text-center rounded m-auto p-3 user-select-none border border-success border-3"
            >
                <h1
                    className="fw-bolder"
                >Challenge</h1>
                <article
                
                >
                    <p>
                        Feed Tyrone Osaurus Rex through a series of challenge levels. Can you complete the {foodImages.length*challengeSize} challenges or will you let him go hungry?
                    </p>
                </article>
            </section>
        </section>
    )
}

export default Home