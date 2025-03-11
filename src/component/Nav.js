import '../component/Nav.css';


const Nav = () => {
  return (
   <div className='topnav'>
       <a className='active' href='#home'>Home</a>
       <a href='#about'>About</a>
       <a href='#contact'>Contact</a>
       <a href='#news'>News</a>
    </div>
  );
}
export default Nav;