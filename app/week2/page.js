import Link from "next/link";

export default function Page() {
    return (
        <main>

            <div class="font-mono">
            <h1 style={{ fontSize: 35 }}>My Shopping List</h1>
            <p> Name: Edward Montilla</p>
            <p> Course Section: CPRG 306 A</p>
            </div>

            <div class="font-mono">
            <Link href="https://github.com/edwardmontilla/cprg306-assignments">https://github.com/edwardmontilla/cprg306-assignments</Link>
            </div>

        </main>

    )
}