<template>
    <h1>UserView</h1>
    <header>
        <h2>Header</h2>
        <RouterView name="header"/>
    </header>
    <main>
        <h2>Main</h2>
        <RouterView name="default"/>
    </main>
    <footer>
        <h2>Footer</h2>
        <RouterView name="footer"/>
    </footer>
</template>