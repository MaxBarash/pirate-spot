{
	const btn = document.querySelector('.ps_content_read_more')
	const container = document.querySelector('.ps_content_container_read_more')
	if (btn && container) {
		btn.addEventListener('click', () => {
			container.classList.add('ps_show')
		})
	}
}
