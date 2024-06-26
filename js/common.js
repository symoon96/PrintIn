$(document).ready(function(){
    accList();
    tab();
    dateFormatChange()
})

function toggleAllGnb(el){
    let $this = el

    if($($this).hasClass('open')){
        allGnbOpen()
    } else {
        allGnbClose()
    }
}

function allGnbOpen(){
    $('.all-gnb').addClass('on');

    gnbOpenBtn()
    if($(window).width() < 1175){
        dimMaker()
    }
}

function allGnbClose(){
    $('.all-gnb').removeClass('on')

    gnbCloseBtn()
    if($(window).width() < 1175){
        dimRemove()
    }
}

function gnbOpenBtn(){
    $('.btn-gnb').addClass('close').removeClass('open')
}

function gnbCloseBtn(){
    $('.btn-gnb').addClass('open').removeClass('close')
}

// dim 생성
function dimMaker() {
    if($('body').find('.dim').length > 0){
        return;
    }
    $('body').append('<div class="dim"></div>');
    bodyHidden();
}

// dim 제거
function dimRemove() {
    $('.dim').remove();
    bodyAuto();
}

// body scroll hidden
function bodyHidden() {
    $('body').css('overflow', 'hidden');
}

// body scroll auto
function bodyAuto() {
    $('body').css('overflow', '')
}

// 팝업열기
function popOpen(el){
    $("." + el).addClass('on');
}

// 팝업닫기
function popClose(el) {
    $("." + el).removeClass('on');
    dimRemove();
}

// dim 옵션 팝업 열기
function popOpenAndDim(el, isDim){
    popOpen(el);
    
    if(isDim == true){
        dimMaker();
    }
}

// dim 옵션 팝업 닫기
function popCloseAndDim(el, isDim){
    popClose(el);
    
    if(isDim == true){
        dimRemove();
    }
}

// 아코디언탭
function accList(){
    $('.acc-wrap [data-click]').click(function(){
        $(this).closest('.acc-list').toggleClass('on');
        $(this).closest('.acc-list').children('.acc-cont').slideToggle(300);
        $(this).closest('.acc-list').siblings().removeClass('on');
        $(this).closest('.acc-list').siblings().children('.acc-cont').slideUp(300);
    });
}

// 탭
function tab(){
    $('.tab-wrap').each(function(){
        let thisUse = $(this).data('use'),
            thisNo = $(this).find('.tab-btn.on').index();

        if(thisUse !== false) {
            $(this).children('.tab-cont-wrap').children('.tab-cont').hide()
            $(this).children('.tab-cont-wrap').children('.tab-cont').eq(thisNo).show();
            
            $(this).find('.tab-btn').click(function(){
                thisNo = $(this).index();

                $(this).siblings('.tab-btn').removeClass('on');
                $(this).addClass('on');

                $(this).closest('.tab-wrap').children('.tab-cont-wrap').children('.tab-cont').hide()
                $(this).closest('.tab-wrap').children('.tab-cont-wrap').children('.tab-cont').eq(thisNo).show();
            })

            if($('[data-tab]').length > 0){
                $('[data-tab]').each(function(){
    
                    $(this).click(function(){
                        thisTabNo = $(this).data('tab') - 1;

                        $(this).closest('.tab-wrap').find('.tab-cont').hide()
                        $(this).closest('.tab-wrap').find('.tab-cont').eq(thisTabNo).show();
        
                        $(this).closest('.tab-wrap').find('.tab-btn').removeClass('on');
                        $(this).closest('.tab-wrap').find('.tab-btn').eq(thisTabNo).addClass('on');
                    })
                })
            }
        }
    });
}

function dateFormatChange(){
    $('.date input[type="date"]').change(function(){
        let date = $(this).val();
        let dateYear = date.substr(0, 4);
        let dateMonth = date.substr(5, 2);
        let dateDay = date.substr(8, 2);

        $(this).closest('.date').find('input[type="text"]').val(dateYear + '.' + dateMonth + '.' + dateDay)

        console.log(dateYear, dateMonth, dateDay)
    });
}