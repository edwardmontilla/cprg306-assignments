import Link from "next/link";

export default function Page() {
    return (
        <main class="h-screen bg-sky-950">

            <div class="flex font-sans justify-center">
                <div>
                    <div class="p-3 pt-10 mb-9">
                        <h1 style={{ fontSize: 35 }}>My Shopping List</h1>
                    </div>
                
                    <p> Name: Edward Montilla</p>
                    <p> Course Section: CPRG 306 A</p>

                    <div class="hover:underline underline-offset-2">
                        <Link href="https://github.com/edwardmontilla/cprg306-assignments">https://github.com/edwardmontilla/cprg306-assignments</Link>
                    </div>

                </div>

                <div class="absolute left-9 top-9">
                    <button class="text-xs text-white bg-cyan-600 border-2 border-cyan-500 h-8 w-13 max-w-s m-3 py-1 px-3 rounded-lg hover:bg-cyan-700">
                        <Link href="/">Home</Link></button>
                </div>

            </div>

        </main>

    )
}