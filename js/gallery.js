document.addEventListener('DOMContentLoaded', function() {
    // 샘플 아이콘 데이터 (실제로는 data.json에서 가져옴)
    const sampleIcons = [
      {
        id: "icon-001",
        name: "홈 아이콘",
        group: "네비게이션",
        componentSetName: "기본 아이콘",
        svgContent: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 22V12h6v10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
        tags: ["홈", "집", "메인"]
      },
      {
        id: "icon-002",
        name: "설정 아이콘",
        group: "시스템",
        componentSetName: "기본 아이콘",
        svgContent: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 15a3 3 0 100-6 3 3 0 000 6z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
        tags: ["설정", "환경설정", "기어"]
      },
      {
        id: "icon-003",
        name: "알림 아이콘",
        group: "커뮤니케이션",
        componentSetName: "알림",
        svgContent: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.73 21a2 2 0 01-3.46 0" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
        tags: ["알림", "벨", "통지"]
      }
    ];
  
    // 아이콘 데이터 로드 (실제로는 fetch API 사용)
    loadIcons();
  
    // 검색 및 필터 이벤트 리스너 설정
    const searchInput = document.getElementById('search-input');
    const groupFilter = document.getElementById('group-filter');
    const componentSetFilter = document.getElementById('component-set-filter');
  
    if (searchInput) {
      searchInput.addEventListener('input', filterIcons);
    }
  
    if (groupFilter) {
      groupFilter.addEventListener('change', filterIcons);
    }
  
    if (componentSetFilter) {
      componentSetFilter.addEventListener('change', filterIcons);
    }
  
    // 아이콘 데이터 로드 함수
    function loadIcons() {
      // 실제로는 fetch를 사용하여 data.json 로드
      // fetch('data.json')
      //   .then(response => response.json())
      //   .then(data => {
      //     renderIcons(data.icons);
      //     setupFilters(data.icons);
      //     createTagCloud(data.icons);
      //   })
      //   .catch(error => {
      //     console.error('아이콘 데이터 로드 실패:', error);
      //     document.getElementById('icon-gallery').innerHTML = '<p class="no-results">아이콘 데이터를 로드할 수 없습니다.</p>';
      //   });
  
      // 샘플 데이터 사용
      renderIcons(sampleIcons);
      setupFilters(sampleIcons);
      createTagCloud(sampleIcons);
    }
  
    // 아이콘 렌더링 함수
    function renderIcons(icons) {
      const gallery = document.getElementById('icon-gallery');
      if (!gallery) return;
  
      gallery.innerHTML = '';
  
      if (icons.length === 0) {
        gallery.innerHTML = '<p class="no-results">검색 결과가 없습니다.</p>';
        return;
      }
  
      icons.forEach(icon => {
        const card = document.createElement('div');
        card.className = 'icon-card';
        card.dataset.id = icon.id;
        
        card.innerHTML = `
          <div class="icon-preview">${icon.svgContent || `<img src="assets/${icon.id}.svg" alt="${icon.name}">`}</div>
          <div class="icon-info">
            <div class="icon-name">${icon.name}</div>
            <div class="icon-meta">
              <span class="icon-group" title="그룹">${icon.group || '-'}</span>
              ${icon.componentSetName ? `<span class="icon-component-set" title="컴포넌트 세트">${icon.componentSetName}</span>` : ''}
            </div>
            <div class="icon-id">${icon.id}</div>
          </div>
        `;
        
        gallery.appendChild(card);
      });
    }
  
    // 필터 설정 함수
    function setupFilters(icons) {
      // 그룹 필터 옵션 설정
      if (groupFilter) {
        const groups = [...new Set(icons.map(icon => icon.group).filter(Boolean))];
        groups.sort();
        
        groups.forEach(group => {
          const option = document.createElement('option');
          option.value = group;
          option.textContent = group;
          groupFilter.appendChild(option);
        });
      }
      
      // 컴포넌트 세트 필터 옵션 설정
      if (componentSetFilter) {
        const componentSets = [...new Set(icons.map(icon => icon.componentSetName).filter(Boolean))];
        componentSets.sort();
        
        componentSets.forEach(set => {
          const option = document.createElement('option');
          option.value = set;
          option.textContent = set;
          componentSetFilter.appendChild(option);
        });
      }
    }
  
    // 태그 클라우드 생성 함수
    function createTagCloud(icons) {
      const tagCloud = document.getElementById('tag-cloud');
      if (!tagCloud) return;
      
      const tags = {};
      
      // 모든 아이콘에서 태그 수집 및 빈도 계산
      icons.forEach(icon => {
        if (icon.tags) {
          icon.tags.forEach(tag => {
            tags[tag] = (tags[tag] || 0) + 1;
          });
        }
      });
      
      // 태그 클라우드 렌더링
      Object.entries(tags)
        .sort((a, b) => b[1] - a[1]) // 빈도순 정렬
        .slice(0, 15) // 상위 15개만 표시
        .forEach(([tag, count]) => {
          const tagElement = document.createElement('span');
          tagElement.className = 'tag';
          tagElement.textContent = `${tag} (${count})`;
          tagElement.addEventListener('click', () => {
            if (searchInput) {
              searchInput.value = tag;
              filterIcons();
            }
          });
          tagCloud.appendChild(tagElement);
        });
    }
  
    // 아이콘 필터링 함수
    function filterIcons() {
      if (!searchInput || !groupFilter || !componentSetFilter) return;
      
      const searchTerm = searchInput.value.toLowerCase();
      const selectedGroup = groupFilter.value;
      const selectedComponentSet = componentSetFilter.value;
      
      const filteredIcons = sampleIcons.filter(icon => {
        // 검색어 필터링
        const matchesSearch = icon.name.toLowerCase().includes(searchTerm) || 
                             (icon.tags && icon.tags.some(tag => tag.toLowerCase().includes(searchTerm)));
        
        // 그룹 필터링
        const matchesGroup = !selectedGroup || icon.group === selectedGroup;
        
        // 컴포넌트 세트 필터링
        const matchesComponentSet = !selectedComponentSet || icon.componentSetName === selectedComponentSet;
        
        return matchesSearch && matchesGroup && matchesComponentSet;
      });
      
      renderIcons(filteredIcons);
    }
  });