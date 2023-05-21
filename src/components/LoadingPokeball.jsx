import Pokeball from '../images/pokeball.png'

const LoadingPokeball = () => {
    return <div className="h-screen grid place-items-center">
		<img src={Pokeball} alt="pokeball" className='w-24 animate-spin' />
	</div>
}
export default LoadingPokeball
