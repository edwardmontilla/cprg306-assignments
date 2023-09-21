import Link from "next/link";

export default function Page() {
    return (
        <main>

            <div class="flex font-sans justify-center">
                <div>
                    <div class="p-3 pt-10 mb-9">
                        <h1 style={{ fontSize: 35 }}>My Shopping List</h1>
                    </div>
                
                    <p> Name: Edward Montilla</p>
                    <p> Course Section: CPRG 306 A</p>

                    <Link href="https://github.com/edwardmontilla/cprg306-assignments">https://github.com/edwardmontilla/cprg306-assignments</Link>
                    
                </div>

            </div>

        </main>

    )
}