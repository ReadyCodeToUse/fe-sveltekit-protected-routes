<script>
	/** @type {import('./$types').ActionData} */
	export let form;
</script>

<section class="flex h-screen items-center justify-around">
	<div class="block bg-base-300 rounded-lg max-w-md">
		<form method="POST" action="?/login&redirectTo=/home" class="flex flex-col space-y-8 p-8">
			<h2 class="text-2xl">Login</h2>
			{#if form?.missing}
				<p class="text-error max-w">The email field is required</p>
			{/if}
			{#if form?.incorrect}
				<p class="text-error">Incorrect email or password</p>
			{/if}

			<label>
				<input
					name="email"
					type="email"
					placeholder="Email"
					value={form?.email ?? ''}
					class="w-full input"
				/>
			</label>

			<label>
				<input name="password" type="password" placeholder="Password" class="w-full input" />
			</label>

			<button class="btn btn-primary">Log-in</button>
		</form>
	</div>
</section>