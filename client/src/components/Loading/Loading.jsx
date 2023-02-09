import { BarLoader } from 'react-spinners'


export const Loading = () => {
    return(
            <div className="text-black h-screen text-4xl flex items-center justify-center flex-col bg-white dark:bg-black w-full">
                <h1 className="font-bold text-7xl self-center  dark:text-white">Oni<span className="text-green-500">Giri</span></h1>
                <BarLoader
                    color='#22c55e'
                    className='mt-2 w-full'
                    width={'250'}
                />
            </div>
    )
}