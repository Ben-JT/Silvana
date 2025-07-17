$("#messageState").on("change", (x) => {
	$(".message").removeClass("openNor").removeClass("closeNor");
	if ($("#messageState").is(":checked")) {
		$(".message").removeClass("closed").removeClass("no-anim").addClass("openNor");
		$(".heart").removeClass("closeHer").removeClass("openedHer").addClass("openHer");
		$(".container").stop().animate({"backgroundColor": "#f48fb1"}, 2000);
		console.log("Abrindo");
	} else {
		$(".message").removeClass("no-anim").addClass("closeNor");
		$(".heart").removeClass("openHer").removeClass("openedHer").addClass("closeHer");
		$(".container").stop().animate({"backgroundColor": "#fce4ec"}, 2000);
		console.log("fechando");
	}
});

$(".message").on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
	console.log("Animation End");
	if ($(".message").hasClass("closeNor"))
		$(".message").addClass("closed");
	$(".message").removeClass("openNor").removeClass("closeNor").addClass("no-anim");
});

$(".heart").on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
	console.log("Animation End");
	if (!$(".heart").hasClass("closeHer"))
		$(".heart").addClass("openedHer").addClass("beating");
	else
		$(".heart").addClass("no-anim").removeClass("beating");
	$(".heart").removeClass("openHer").removeClass("closeHer");
});



// Este código se ejecuta cuando la página ha cargado completamente
$(document).ready(function() {

    // 1. Seleccionamos los elementos con los que vamos a trabajar
    const checkbox = $('#messageState'); // El checkbox oculto
    const cancion = $('#miCancion')[0];   // El elemento de audio. [0] es importante para obtener el objeto de audio nativo

    // 2. Escuchamos el evento 'change' en el checkbox.
    // Esto se dispara cuando el usuario hace clic en el corazón (la label).
    checkbox.on('change', function() {
        
        // 3. Comprobamos si el checkbox está marcado
        if (this.checked) {
            // Si está marcado (el corazón fue presionado para mostrar el mensaje)
            // Reproducimos la canción.
            cancion.play();
        } else {
            // Si no está marcado (el corazón fue presionado de nuevo para ocultar el mensaje)
            // Pausamos la canción y la reiniciamos para la próxima vez.
            cancion.pause();
            cancion.currentTime = 0; // Reinicia la canción al principio
        }
    });

    // Opcional: Para animar el mensaje al aparecer/desaparecer (se ve más bonito)
    // Este código usa el estado del checkbox para mostrar u ocultar el mensaje con una animación.
    // Si ya tienes una animación, puedes integrar la lógica de la canción en ella.
    const mensaje = $('.message');
    const instruccion = $('.instruction');

    checkbox.on('change', function() {
        if (this.checked) {
            mensaje.fadeIn('slow'); // Muestra el mensaje con un desvanecimiento lento
            instruccion.fadeOut('fast'); // Oculta la instrucción "Presiona mi corazón"
        } else {
            mensaje.fadeOut('slow'); // Oculta el mensaje
            instruccion.fadeIn('fast'); // Vuelve a mostrar la instrucción
        }
    });

});