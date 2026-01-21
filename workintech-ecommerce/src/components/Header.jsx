export default function Header() {
    return (
        <div class="container">
            <nav class="navbar">
                <a href="#" class="navbar-brand">Bandage</a>
                <ul class="navbar-nav">
                    <li class="nav-item"><a href="#" class="nav-link">Home</a></li>
                    <li class="nav-item"><a href="#" class="nav-link">Shop</a></li>
                    <li class="nav-item"><a href="#" class="nav-link">About</a></li>
                    <li class="nav-item"><a href="#" class="nav-link">Blog</a></li>
                    <li class="nav-item"><a href="#" class="nav-link">Contact</a></li>
                    <li class="nav-item"><a href="#" class="nav-link">Pages</a></li>
                </ul>
                <ul class="user-panel">
                    <li>
                        <i class="fa-regular fa-user"></i>
                        <a href="#">
                            Login / Register
                        </a>
                    </li>
                    <li><a href="#"><i class="fa-solid fa-magnifying-glass"></i></a></li>
                    <li>
                        <i class="fa-solid fa-shopping-bag"></i>
                        <a href="#">
                            1
                        </a>
                    </li>
                    <li>
                        <i class="fa-regular fa-heart"></i>
                        <a href="#">
                            1
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}