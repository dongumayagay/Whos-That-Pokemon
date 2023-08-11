<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

{#each { length: 10 } as _}
	<article>
		<h1 class=" font-pokemon-solid">Lorem ipsum dolor sit amet.</h1>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel veritatis expedita veniam vitae
			ratione rem. Libero velit ut tenetur qui doloremque eaque id quod iste nisi natus. Odit, illo
			unde?
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores temporibus facilis provident,
			minus officia eum quos id animi quaerat architecto, et eos facere dolor eius ipsa distinctio,
			non sequi suscipit.
		</p>
		<p>
			Iusto earum fuga eum ea quibusdam tempore repellendus aspernatur rem, quia alias nulla veniam
			non eaque, officiis vel dolorem voluptas sint aliquam modi sapiente? Provident ipsum velit
			voluptatum sunt perspiciatis.
		</p>
		<p>
			Dolorem porro temporibus asperiores expedita. Dolorum, cupiditate ipsa. Enim sunt alias, vero
			rem repudiandae accusamus commodi ipsa sint temporibus. Totam reprehenderit ipsa delectus
			eveniet tenetur assumenda mollitia autem corporis in.
		</p>
		<p>
			Ea neque et iure, amet quis placeat officiis explicabo quisquam maiores, minus reprehenderit
			doloremque illo sequi magni inventore nam debitis voluptate quo excepturi facere! Commodi ut
			voluptate nam nisi magni.
		</p>
		<p>
			Sapiente facere adipisci repellendus. Amet, voluptatibus eveniet? Qui corrupti cum illo atque
			delectus cupiditate nemo eveniet autem molestias, soluta consequatur exercitationem quam
			tempora, laboriosam, necessitatibus dicta! Dolorum magni maxime odio.
		</p>
	</article>
{/each}
