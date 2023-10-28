<script>
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte'
  </script>
  
  <Navbar class='bg-slate-700' let:hidden let:toggle>
    <NavBrand class='text-white' href="/">
      <img
        src="https://flowbite.com/docs/images/logo.svg"
        class="mr-3 h-6 sm:h-9"
        alt="Flowbite Logo"
      />
      <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
        Flowbite
      </span>
    </NavBrand>
    <NavHamburger on:click={toggle} />
    <NavUl  {hidden}>
      <NavLi class='text-white' href="/" active={true}>Home</NavLi>
      <NavLi class='text-white' href="/login">Login</NavLi>

    </NavUl>
  </Navbar>