 function toggleReport(btn) {
      const report = btn.nextElementSibling;
      report.style.display = report.style.display === 'block' ? 'none' : 'block';
    }

    document.querySelectorAll('.report-toggle').forEach(btn => {
        btn.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                btn.click();
            }
        });
    });

    // Collapse other open reports when one is opened
    document.querySelectorAll('.report-toggle').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.report-text').forEach(report => {
                if (report !== btn.nextElementSibling) {
                    report.style.display = 'none';
                }
            });
        });
    });

    // Add keyboard navigation for teacher cards
    document.querySelectorAll('.teacher-card').forEach(card => {
        card.tabIndex = 0;
        card.addEventListener('focus', function() {
            card.style.boxShadow = '0 0 0 3px #90cdf4';
        });
        card.addEventListener('blur', function() {
            card.style.boxShadow = '';
        });
    });
    // Feature: Filter teachers by subject or department
    const filterInput = document.createElement('input');
    filterInput.type = 'text';
    filterInput.placeholder = 'Filter by subject or department...';
    filterInput.style.cssText = 'display:block;margin:0 auto 25px auto;padding:8px 12px;width:90%;max-width:350px;border-radius:6px;border:1px solid #bcdff1;font-size:1rem;';
    document.body.insertBefore(filterInput, document.body.children[1]);

    filterInput.addEventListener('input', function() {
      const val = filterInput.value.trim().toLowerCase();
      document.querySelectorAll('.teacher-card').forEach(card => {
        const info = card.innerText.toLowerCase();
        card.style.display = info.includes(val) ? '' : 'none';
      });
    });

    // Feature: Expand/collapse all reports
    const expandAllBtn = document.createElement('button');
    expandAllBtn.textContent = 'Expand All Reports';
    expandAllBtn.className = 'report-toggle';
    expandAllBtn.style.cssText = 'display:block;margin:0 auto 20px auto;background:#3182ce;color:#fff;border-radius:6px;padding:8px 18px;';
    document.body.insertBefore(expandAllBtn, filterInput.nextSibling);

    let allExpanded = false;
    expandAllBtn.addEventListener('click', function() {
      allExpanded = !allExpanded;
      document.querySelectorAll('.report-text').forEach(report => {
        report.style.display = allExpanded ? 'block' : 'none';
      });
      expandAllBtn.textContent = allExpanded ? 'Collapse All Reports' : 'Expand All Reports';
    });

    // Feature: Keyboard shortcut (Ctrl+F) focuses filter input
    document.addEventListener('keydown', function(e) {
      if (e.ctrlKey && e.key.toLowerCase() === 'f') {
        e.preventDefault();
        filterInput.focus();
      }
    });

    // Feature: Highlight teacher card on mouse hover
    document.querySelectorAll('.teacher-card').forEach(card => {
      card.addEventListener('mouseenter', function() {
        card.style.outline = '2px solid #3182ce';
      });
      card.addEventListener('mouseleave', function() {
        card.style.outline = '';
      });
    });
    // Feature: Sort teachers by rating
    const sortBtn = document.createElement('button');
    sortBtn.textContent = 'Sort by Rating (High → Low)';
    sortBtn.className = 'report-toggle';
    sortBtn.style.cssText = 'display:block;margin:0 auto 20px auto;background:#38a169;color:#fff;border-radius:6px;padding:8px 18px;';
    document.body.insertBefore(sortBtn, expandAllBtn.nextSibling);

    let sortedDesc = true;
    sortBtn.addEventListener('click', function() {
      const cards = Array.from(document.querySelectorAll('.teacher-card'));
      cards.sort((a, b) => {
      // Extract rating from stars text, e.g., (4.2)
      const getRating = card => {
        const match = card.querySelector('.stars')?.textContent.match(/\(([\d.]+)\)/);
        return match ? parseFloat(match[1]) : 0;
      };
      return sortedDesc
        ? getRating(b) - getRating(a)
        : getRating(a) - getRating(b);
      });
      const parent = cards[0].parentNode;
      cards.forEach(card => parent.appendChild(card));
      sortedDesc = !sortedDesc;
      sortBtn.textContent = sortedDesc
      ? 'Sort by Rating (High → Low)'
      : 'Sort by Rating (Low → High)';
    });
    