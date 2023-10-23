import logo from '../assets/logo.svg'
export const Hero = () => {
  return (
     <header className='w-full flex justify-center
     items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src = {logo} alt='sumz_logo' className='w-28 object-contain' />
        <button type='button' onClick={ () => window.open('https://github.com/mikydad11')}
        className='black_btn'> GitHub</button>
      </nav>
      <h1 className='head_text'>
        Summurize Articles with <br className='max-md:hidden' />
        <span className='orange_gradient'>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
        Simplfy your reading with summize, an open-source article summurizer that transforms lengthy articles into clear and consize summaries.
      </h2>
     </header>
  )
}
