"use strict";
(function(){

  // Año automático en el footer
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Header con sombra al hacer scroll
  var header = document.getElementById('siteHeader');
  function onScroll(){
    if (window.scrollY > 12) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Menú móvil
  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');
  toggle.addEventListener('click', function(){
    var isOpen = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
  links.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click', function(){
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Estado abierto/cerrado en vivo (viernes=5, sábado=6, domingo=0)
  function updateStatus(){
    var dot = document.getElementById('statusDot');
    var text = document.getElementById('statusText');
    var now = new Date();
    var day = now.getDay();
    var minutes = now.getHours() * 60 + now.getMinutes();
    var openMin = 18 * 60;        // 6:00 pm
    var closeMin = 24 * 60 + 30;  // 12:30 am (del día siguiente)
    var isOpenDay = (day === 5 || day === 6 || day === 0);
    var isOpenNow = isOpenDay && minutes >= openMin;
    // Cubre el tramo después de medianoche (00:00–00:30) de sáb/dom/lun madrugada
    var wasOpenYesterday = (day === 6 || day === 0 || day === 1) && minutes < (30);

    if (isOpenNow || wasOpenYesterday) {
      dot.className = 'status-dot on';
      text.textContent = 'Abierto ahora';
    } else {
      dot.className = 'status-dot off';
      text.textContent = 'Cerrado — abrimos viernes a las 6:00 pm';
    }
  }
  updateStatus();
  setInterval(updateStatus, 60000);

  // Formulario -> arma mensaje y abre WhatsApp (sustituir número real)
  var WHATSAPP_NUMBER = '521000000000'; // TODO: reemplazar con el número real, formato 521XXXXXXXXXX
  var form = document.getElementById('orderForm');
  var msg = document.getElementById('formMsg');

  form.addEventListener('submit', function(e){
    e.preventDefault();
    var nombre = form.nombre.value.trim();
    var telefono = form.telefono.value.trim();
    var tipo = form.tipo.value;
    var pedido = form.pedido.value.trim();

    if (!nombre || !telefono || !pedido){
      msg.textContent = 'Por favor completa nombre, teléfono y tu pedido.';
      msg.classList.add('error');
      return;
    }
    msg.classList.remove('error');

    var texto = 'Hola, soy ' + nombre + ' (tel. ' + telefono + '). ' +
                'Quiero: ' + tipo + '. Pedido: ' + pedido;
    var url = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(texto);

    msg.textContent = 'Abriendo WhatsApp para enviar tu pedido…';
    window.open(url, '_blank', 'noopener');
    form.reset();
  });
})();
