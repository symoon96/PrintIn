$(document).ready(function(){
    accList()
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
function popOpen(id){
    $("#" + id).addClass('on');
}

// 팝업닫기
function popClose(id) {
    $("#" + id).removeClass('on');
    dimRemove();
}

// dim 옵션 팝업 열기
function popOpenAndDim(id, isDim){
    popOpen(id);
    
    if(isDim == true){
        dimMaker();
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