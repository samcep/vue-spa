<template>
  <div class="mb-4">
    <label for="username" class="block text-gray-600">Username</label>
    <input
      type="text"
      id="username"
      name="username"
      class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
      autocomplete="off"
    />
  </div>

  <div class="mb-4">
    <label for="username" class="block text-gray-600">Email</label>
    <input
      type="email"
      id="email"
      name="email"
      class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
      autocomplete="off"
    />
  </div>
  <!-- Password Input -->
  <div class="mb-4">
    <label for="password" class="block text-gray-600">Password</label>
    <input
      type="password"
      id="password"
      name="password"
      class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
      autocomplete="off"
    />
  </div>
  <!-- Forgot Password Link -->
  <div class="mb-6 text-blue-500">
    <a href="#" class="hover:underline">Login</a>
  </div>
  <!-- Login Button -->
  <button
    type="submit"
    class="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
  >
    Register
  </button>
</template>
