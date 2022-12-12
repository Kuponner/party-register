// Create Promotion /promotion
const urlPromotion = 'https://testing-kuponner-production.up.railway.app/api/promotion';

fetch(urlPromotion)
    .then(res => res.json())
    .then(data => {

        for (let i = 0; i < data.length; i++) {

            let div = document.createElement('div');
            div.className = 'col-md-6 col-xl-4';

            // Convert url to string
            let text = data[i].kp_PromotionName;
            let url = text.replace(/ /g, "-");

            // DateFormat
            moment.locale('es');
            let date = moment(`${data[i].kp_PromotionOfferTime}`);
            date = date.format('D MMMM, YYYY');

            div.innerHTML = `

            <!-- Card item START -->
            <div class="card card-hover-shadow pb-0 h-100">
              <!-- Overlay item -->
              <div class="position-relative">
                <!-- Image -->
                <img src="${data[i].kp_PromotionImages}" class="card-img-top" alt="Card image">
                <!-- Overlay -->
                <div class="card-img-overlay d-flex flex-column p-4 z-index-1">
                  <!-- Card overlay top -->
                  <div class="position-absolute top-0 start-0 z-index-1 m-0">
                  <div class="badge bg-primary bg-opacity-75 text-white"><b
                      style="font-size: 1.3rem;">=${data[i].kp_PromotionDiscount}%</b></div>
                </div>
                </div>
              </div>
              <!-- Image -->

              <!-- Card body START -->
              <div class="card-body px-3">
                <div class="d-sm-flex justify-content-between align-items-center">
                  <!-- Avatar image -->
                  <div class="d-flex align-items-sm-center ms-sm-0" id="logoClient">
                    <div class="avatar flex-shrink-0">
                      <img class="avatar-img rounded-circle" width="32" height="32"
                        src="${data[i].kp_PromotionLogoClient}" alt="">
                    </div>
                  </div>
                  <!-- Title -->
                  <div class="ms-3">
                    <h5 class="card-title"><a href="/detail/${url}" class="stretched-link">${data[i].kp_PromotionName}</a></h5>
                    <h6 class="fw-light m-0" style="text-align: justify;">${data[i].kp_PromotionDescription}</h6>
                    <small class="me-3">Termina: ${date}</small>
                  </div>
                </div>

                <!-- List -->
                <ul class="mt-1 mb-0">
                  <li class="nav-item p fw-light text-secondary mb-0">
                    <i class="fa-solid fa-tags text-primary me-2"></i>${data[i].kp_PromotionTag}
                  </li>
                  <li class="nav-item p fw-light text-secondary mb-0">
                    <i class="fa-solid fa-tags text-primary me-2"></i><b>Categoría: </b>${data[i].kp_PromotionCategory}
                  </li>
                </ul>
                <!-- Price -->
                <div class="d-flex align-items-center pt-2">
                  <small>Paga:</small>
                  <h5 class="fw-normal text-primary mb-0 pb-2"><b>$${data[i].kp_PromotionPrice}</b></h5>
                </div>
                <!-- Buttons -->
                <div class="mt-2 mt-sm-0 pb-2">
                  <a href="/cart" class="btn btn-sm btn-primary-soft mb-0 w-100 pt-2">Comprar Ahora<i
                      class="bi bi-cart ms-2"></i></a>
                </div>
                <div class="mt-2 mt-sm-0">
                  <a href="/payment" class="btn btn-sm btn-primary-soft mb-0 w-100 pt-2">Añadir
                    al carrito<i class="bi bi-cart ms-2"></i></a>
                </div>
              </div>
              <!-- Card body END -->

            </div>
          <!-- Card item END -->

        
        `;

            const sectionPromotion = document.body.appendChild(div);
            document.getElementById('sectionPromotions').appendChild(sectionPromotion);

        }

    });