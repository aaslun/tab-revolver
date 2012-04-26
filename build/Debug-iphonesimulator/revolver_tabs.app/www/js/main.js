$(function(){
    var $tabsList = $('#tabs_list');
    $('#add_tab').click(function(){
        var $newTabItem = $('<li></li>')
            .attr('data-corners','false')
            .attr('data-shadow','false')
            .attr('data-iconshadow','true')
            .attr('data-wrapperels','div')
            .attr('data-icon','arrow-r')
            .attr('data-iconpos','right')
            .attr('data-theme','c')
            .attr('class','ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-btn-up-c');
        var $newTabInnerDiv = $('<div></div>')
            .attr('class','ui-btn-inner ui-li');
        var $newTabInnerText = $('<div></div>')
            .attr('class','ui-btn-text');
        var $tabLink = $('<a>New tab</a>')
                .attr('href','#')
                .attr('class','ui-link-inherit');
        var $tabSpanArrow = $('<span>&nbsp;</span>')
                .attr('class','ui-icon ui-icon-arrow-r ui-icon-shadow');
        $newTabItem.append($newTabInnerDiv.append($newTabInnerText.append($tabLink).append($tabSpanArrow)))
            .hide();
        $tabsList.animate({
           height : '+='+43
        }, function(){
            $tabsList.append($newTabItem.fadeIn());
        });

    });
});