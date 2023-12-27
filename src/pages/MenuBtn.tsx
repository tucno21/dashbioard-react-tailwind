
interface Props {
    estado: boolean;
}

const MenuBtn = ({ estado }: Props) => {
    return (
        <button className="flex flex-col  gap-[.5rem] bg-slate-800/5 p-2 group">
            <span className={`block w-8 h-0.5 bg-black rounded-full transition-all ease-in duration-400 md:group-hover:translate-y-2.5 md:group-hover:rotate-45 ${estado ? 'translate-y-2.5 rotate-45' : ''}`}></span>
            <span className={`block w-8 h-0.5 bg-black rounded-full transition-all ease-in duration-400 md:group-hover:scale-0 ${estado ? 'scale-0' : ''}`}></span>
            <span className={`block w-8 h-0.5 bg-black rounded-full transition-all ease-in duration-400 md:group-hover:-translate-y-2.5 md:group-hover:-rotate-45 ${estado ? '-translate-y-2.5 -rotate-45' : ''}`}></span>
        </button>
    )
}

export default MenuBtn