let imagens = document.querySelectorAll('.imagem');
        let modal = document.querySelector('.campoImagem');
        let modalImg = document.querySelector('#modal_img');
        let btClose = document.querySelector('#bt_close');
        let srcVal = "";

        for (let i = 0; i < imagens.length; i++) {
            imagens[i].addEventListener('click', function () {
                srcVal = imagens[i].getAttribute('src');
                modalImg.setAttribute('src', srcVal);
                modal.classList.toggle('modal_active');
            });

        }