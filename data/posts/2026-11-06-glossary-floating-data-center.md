---
id: 2026-11-06-glossary-floating-data-center
title: "[인프라 용어사전] 부유식 데이터센터 (Floating Data Center, FDC) - 육상 규제와 전력난을 돌파하는 해양 플랜트 컴퓨팅 인프라"
date: 2026-11-06
time: "06:34"
category: Terminology
status: published
summary: "직관적 비유: 육상에 거대한 빌딩을 짓고 막대한 전력과 물을 끌어오는 대신, 바다 위에 떠 있는 초대형 바지선이나 해상 플랜트 구조물에 서버실을 구축하고 차가운 바닷물로 발열을 식히는 ‘해상 모듈형 하드웨어 컴퓨팅 기지’ 입니다. 공학적 정의: 부유식 데이터센터(Floating Data Center, FDC) 는 선박형 바지선(Barge) 또는 반잠수식(S"
labels:
  - 인프라용어사전
  - IT백과사전
  - 부유식데이터센터
  - FDC
  - 데이터센터
---

<div style='font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif; line-height: 1.8; color: #1E293B;'>

<div style='background-color: #F8FAFC; border-left: 5px solid #2563EB; padding: 18px 22px; margin-bottom: 28px; border-radius: 4px;'>
  <h2 style='margin: 0 0 10px 0; font-size: 20px; color: #0F172A; font-weight: 700;'>📌 1. 30초 핵심 요약 & 개념 정의</h2>
  <p style='margin: 0 0 12px 0; font-size: 15px; color: #334155;'>
    <strong>직관적 비유:</strong> 육상에 거대한 빌딩을 짓고 막대한 전력과 물을 끌어오는 대신, <strong>바다 위에 떠 있는 초대형 바지선이나 해상 플랜트 구조물에 서버실을 구축하고 차가운 바닷물로 발열을 식히는 ‘해상 모듈형 하드웨어 컴퓨팅 기지’</strong>입니다.
  </p>
  <p style='margin: 0; font-size: 15px; color: #334155;'>
    <strong>공학적 정의:</strong> <strong>부유식 데이터센터(Floating Data Center, FDC)</strong>는 선박형 바지선(Barge) 또는 반잠수식(Semi-submersible) 해양 구조물 상부에 고밀도 IT 랙, 전력 변환 및 배전 설비, 비상 발전기, 네트워크 인입 설비를 모듈형으로 탑재하고, <strong>인접한 무한한 해수를 직접·간접 열교환원으로 활용하여 냉각 효율을 극대화한 해상 특화 하드웨어 인프라 플랫폼</strong>입니다.
  </p>
</div>

<h2 style='font-size: 19px; color: #0F172A; border-left: 4px solid #0EA5E9; padding-left: 12px; margin: 32px 0 16px 0; font-weight: 700;'>⚙️ 2. 작동 원리 & 메커니즘</h2>
<p style='font-size: 15px; color: #334155; margin-bottom: 16px;'>
  부유식 데이터센터는 조선·해양 플랜트 공학과 하이퍼스케일 데이터센터 엔지니어링이 융합된 복합 하드웨어 시스템입니다. 물리적 입지 선정부터 냉각, 전력 공급 및 네트워크 연결까지 육상 데이터센터와 차별화된 4단계 아키텍처로 구동됩니다.
</p>

<div style='display: grid; grid-template-columns: 1fr; gap: 14px; margin-bottom: 24px;'>
  <div style='background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 8px; padding: 16px;'>
    <h3 style='margin: 0 0 8px 0; font-size: 16px; color: #1E40AF;'>1) 내진 및 복원성을 갖춘 해양 부유 플랫폼</h3>
    <p style='margin: 0; font-size: 14px; color: #475569;'>강재(Steel) 기반의 바지선 또는 다주식 반잠수 폰툰(Pontoon) 구조를 적용하여 조수간만의 차와 파랑, 강풍에도 구조적 복원력을 유지합니다. 선체 내부와 상부 데크는 밀폐형 모듈 챔버로 구획되어 염무(Salt Mist)와 해수를 완벽히 차단합니다.</p>
  </div>
  <div style='background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 8px; padding: 16px;'>
    <h3 style='margin: 0 0 8px 0; font-size: 16px; color: #1E40AF;'>2) 해수 열교환 기반 무칠러(Chiller-less) 냉각 메커니즘</h3>
    <p style='margin: 0; font-size: 14px; color: #475569;'>고발열 AI 서버 랙에서 순환된 1차 냉각수가 선체 하부에 설치된 티타늄 판형 열교환기(Titanium Plate Heat Exchanger)를 통과하며 저온의 해수와 열을 교환합니다. 대형 압축기(칠러) 구동 없이 연중 자연 냉각(Free Cooling)이 가능하여 전력 사용 효율성(PUE)을 1.10 이하로 유지합니다.</p>
  </div>
  <div style='background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 8px; padding: 16px;'>
    <h3 style='margin: 0 0 8px 0; font-size: 16px; color: #1E40AF;'>3) 해상 마이크로그리드 전력 제어 및 연계</h3>
    <p style='margin: 0; font-size: 14px; color: #475569;'>육상 전력망으로부터 해저 전력 케이블을 통해 수전하거나, 인근 해상 풍력 및 가스터빈과 연계합니다. ABB 등의 고속 스위치기어 및 마이크로그리드 전력관리시스템(PMS)을 통해 AI 연산 부하 급증 시에도 전압과 주파수 변동을 실시간으로 보정합니다.</p>
  </div>
  <div style='background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 8px; padding: 16px;'>
    <h3 style='margin: 0 0 8px 0; font-size: 16px; color: #1E40AF;'>4) 해저 광케이블 직결을 통한 초저지연 백본</h3>
    <p style='margin: 0; font-size: 14px; color: #475569;'>해안선 인근 연안에 계류되므로 해저 광케이블 육양국(Cable Landing Station)과 최단거리로 연결됩니다. 대도시 인근 해역에 배치될 경우 내륙 장거리 전송에 따른 레이턴시 페널티 없이 초저지연 데이터 통신을 구현합니다.</p>
  </div>
</div>

<h3 style='font-size: 16px; color: #0F172A; margin: 24px 0 12px 0; font-weight: 600;'>📊 하드웨어 인프라 비교: 부유식 데이터센터 vs 기존 인프라</h3>
<div style='overflow-x: auto; margin-bottom: 28px;'>
  <table style='width: 100%; border-collapse: collapse; font-size: 13.5px; text-align: left; border: 1px solid #CBD5E1;'>
    <thead>
      <tr style='background-color: #F1F5F9; color: #0F172A;'>
        <th style='padding: 10px 12px; border: 1px solid #CBD5E1;'>비교 항목</th>
        <th style='padding: 10px 12px; border: 1px solid #CBD5E1;'>부유식 데이터센터 (FDC)</th>
        <th style='padding: 10px 12px; border: 1px solid #CBD5E1;'>전통적 육상 데이터센터</th>
        <th style='padding: 10px 12px; border: 1px solid #CBD5E1;'>육상 모듈러(PMDC)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style='padding: 10px 12px; border: 1px solid #CBD5E1; font-weight: 600; background-color: #F8FAFC;'>부지 및 입지 제약</td>
        <td style='padding: 10px 12px; border: 1px solid #CBD5E1; color: #1D4ED8; font-weight: 600;'>연안 해상 계류 (토지 매입 불필요)</td>
        <td style='padding: 10px 12px; border: 1px solid #CBD5E1;'>대규모 부지 매입 및 토지 용도변경 필수</td>
        <td style='padding: 10px 12px; border: 1px solid #CBD5E1;'>유휴 육상 부지 확보 필요</td>
      </tr>
      <tr>
        <td style='padding: 10px 12px; border: 1px solid #CBD5E1; font-weight: 600; background-color: #F8FAFC;'>냉각 방식 & 효율</td>
        <td style='padding: 10px 12px; border: 1px solid #CBD5E1;'>해수 직접 열교환 (PUE 1.05~1.15)</td>
        <td style='padding: 10px 12px; border: 1px solid #CBD5E1;'>냉각탑 증발식 또는 칠러 (PUE 1.25~1.45)</td>
        <td style='padding: 10px 12px; border: 1px solid #CBD5E1;'>공랭식 칠러 패키지 (PUE 1.20~1.35)</td>
      </tr>
      <tr>
        <td style='padding: 10px 12px; border: 1px solid #CBD5E1; font-weight: 600; background-color: #F8FAFC;'>용수 소비량 (WUE)</td>
        <td style='padding: 10px 12px; border: 1px solid #CBD5E1; color: #1D4ED8; font-weight: 600;'>폐쇄형 열교환으로 민물 소비 0 (WUE 0.0)</td>
        <td style='padding: 10px 12px; border: 1px solid #CBD5E1;'>일 수백만 리터 담수 증발 소비</td>
        <td style='padding: 10px 12px; border: 1px solid #CBD5E1;'>시스템 구성에 따라 중소량 담수 소비</td>
      </tr>
      <tr>
        <td style='padding: 10px 12px; border: 1px solid #CBD5E1; font-weight: 600; background-color: #F8FAFC;'>구축 리드타임</td>
        <td style='padding: 10px 12px; border: 1px solid #CBD5E1;'>조선소 건조 표준화 (12~18개월)</td>
        <td style='padding: 10px 12px; border: 1px solid #CBD5E1;'>인허가 및 토목 공사 포함 36~48개월</td>
        <td style='padding: 10px 12px; border: 1px solid #CBD5E1;'>사전 제작 기반 18~24개월</td>
      </tr>
      <tr>
        <td style='padding: 10px 12px; border: 1px solid #CBD5E1; font-weight: 600; background-color: #F8FAFC;'>규제 및 주민 민원</td>
        <td style='padding: 10px 12px; border: 1px solid #CBD5E1; color: #1D4ED8; font-weight: 600;'>지자체 건설 모라토리엄 및 님비(NIMBY) 회피</td>
        <td style='padding: 10px 12px; border: 1px solid #CBD5E1;'>주민투표 규제, 송전망 대기열 마찰 극심</td>
        <td style='padding: 10px 12px; border: 1px solid #CBD5E1;'>건축 인허가 및 지역 전력 용량 제한</td>
      </tr>
    </tbody>
  </table>
</div>

<h2 style='font-size: 19px; color: #0F172A; border-left: 4px solid #0EA5E9; padding-left: 12px; margin: 32px 0 16px 0; font-weight: 700;'>🏢 3. 오늘자 실제 적용 사례 (오늘 뉴스 연계)</h2>
<p style='font-size: 15px; color: #334155; margin-bottom: 14px;'>
  2026년 11월 5일, <strong>한화오션은 글로벌 전기화 및 자동화 선도 기업 ABB와 ‘부유식 데이터센터(Floating Data Center, FDC) 전력·제어 시스템 기술 협력’을 위한 업무협약(MOU)을 공식 체결</strong>했습니다. 이번 협약은 한화오션이 세계 최대 가스 에너지 전시회 ‘가스텍 2026’에서 선보인 자체 FDC 모델을 기반으로, 해양 플랜트 구조물에 ABB의 배전반, 변압기, 무정전 전원 공급 장치, 마이크로그리드 전력 제어 솔루션을 결합하는 프로젝트입니다.
</p>
<p style='font-size: 15px; color: #334155; margin-bottom: 14px;'>
  이 기술이 오늘자 글로벌 인프라 시장에서 결정적인 주목을 받는 배경에는 <strong>미국 중간선거 직후 발생한 대규모 ‘데이터센터 건설 모라토리엄’ 사태</strong>가 있습니다. 미국 36개 주 주지사 당선인 중 34명이 데이터센터 규제를 공식 지지하고, 텍사스·오하이오 등 12개 주에서 신규 건설 잠정 중단이 요구되면서 육상 하이퍼스케일 파이프라인의 50% 이상이 인허가 마찰에 직면했습니다.
</p>
<p style='font-size: 15px; color: #334155;'>
  메타와 오픈AI 등 빅테크 기업들이 미국 내 착공 지연에 대응해 해외 거점 및 대체 입지를 긴급 검토하는 가운데, 토지 수용 절차와 주민 민원을 우회하고 송전망 연계 병목을 돌파할 수 있는 <strong>부유식 해상 데이터센터 하드웨어 아키텍처가 차세대 대안 인프라로 급부상</strong>하고 있습니다.
</p>

<h2 style='font-size: 19px; color: #0F172A; border-left: 4px solid #0EA5E9; padding-left: 12px; margin: 32px 0 16px 0; font-weight: 700;'>⚖️ 4. 기술적 장단점 및 도입 시 고려사항</h2>
<div style='display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 24px;'>
  <div style='background-color: #F0FDF4; border: 1px solid #BBF7D0; border-radius: 8px; padding: 16px;'>
    <h3 style='margin: 0 0 10px 0; font-size: 15px; color: #166534; font-weight: 700;'>✅ 하드웨어 엔지니어링 강점</h3>
    <ul style='margin: 0; padding-left: 18px; font-size: 13.5px; color: #14532D; line-height: 1.7;'>
      <li><strong>인허가 및 구축 리드타임 60% 단축:</strong> 조선소 독(Dock)에서 모듈 일괄 건조 후 해상 예인 배치.</li>
      <li><strong>초저 PUE 달성:</strong> 무한한 해수 열교환을 통한 냉각 압축기 동력 배제로 냉각 PUE 1.1 이하 유지.</li>
      <li><strong>토지 수용비 및 냉각수 비용 제로:</strong> 비싼 부지 매입 비용과 담수 소모에 따른 환경 규제 회피.</li>
      <li><strong>유연한 이동성:</strong> 수요 변화나 전력 단가 변동 시 선체를 다른 해역으로 예인(Towing) 재배치 가능.</li>
    </ul>
  </div>
  <div style='background-color: #FEF2F2; border: 1px solid #FECACA; border-radius: 8px; padding: 16px;'>
    <h3 style='margin: 0 0 10px 0; font-size: 15px; color: #991B1B; font-weight: 700;'>⚠️ 운영 및 설계 고려사항</h3>
    <ul style='margin: 0; padding-left: 18px; font-size: 13.5px; color: #7F1D1D; line-height: 1.7;'>
      <li><strong>해양 염무 및 갈바닉 부식(Corrosion):</strong> 티타늄 합금 열교환기 및 ISO 12944 중방식 코팅, 3단계 공기 필터 필수.</li>
      <li><strong>파랑 진동 및 동적 하중(Vibration Damping):</strong> 선체 요동이 광케이블 접속부와 서버 랙에 미치는 충격을 흡수하는 기계식 댐퍼 적용 필요.</li>
      <li><strong>해양 생태계 온배수 배출 규제:</strong> 열교환 후 방류되는 해수의 온도 상승 폭을 3℃ 이내로 억제하는 디퓨저 노즐 설계 필수.</li>
      <li><strong>해상 접근성 및 유지보수 물류:</strong> 기상 악화 시 하드웨어 부품 교체 및 기술진 탑승 접근성이 육상 대비 제한적.</li>
    </ul>
  </div>
</div>

<div style='background-color: #EEF2FF; border-left: 5px solid #4F46E5; padding: 16px 20px; margin-bottom: 28px; border-radius: 4px;'>
  <h2 style='margin: 0 0 8px 0; font-size: 17px; color: #312E81; font-weight: 700;'>💡 5. 엔지니어/실무자를 위한 1줄 인사이트</h2>
  <p style='margin: 0; font-size: 14.5px; color: #3730A3; font-weight: 500;'>
    “육상 인프라가 송전망 대기열과 지자체 건설 규제의 벽에 부딪힐 때, 부유식 데이터센터(FDC)는 조선 해양 공학과 고전력 전기 제어 아키텍처를 결합해 물리적 제약을 무력화하는 현실적인 대안 하드웨어 플랫폼이다.”
  </p>
</div>

<h2 style='font-size: 17px; color: #0F172A; border-left: 4px solid #64748B; padding-left: 10px; margin: 28px 0 12px 0; font-weight: 700;'>🔗 6. 오늘자 관련 뉴스 원문 링크</h2>
<ul style='list-style-type: disc; padding-left: 20px; font-size: 14px; color: #334155; line-height: 1.8;'>
  <li style='margin-bottom: 8px;'>
    <a href='https://www.chosun.com/economy/industry-company/2026/11/05/GQ4DEYZVGZQTINBTGY2DQOLCG4/' target='_blank' style='color: #2563EB; text-decoration: none; font-weight: 600;'>한화오션·ABB, 부유식 데이터센터 전력 기술 협력</a> - 조선일보
  </li>
  <li style='margin-bottom: 8px;'>
    <a href='http://www.geojetimes.co.kr/news/articleView.html?idxno=205936' target='_blank' style='color: #2563EB; text-decoration: none; font-weight: 600;'>한화오션, 바다 위 데이터센터 전력 안정성 높인다…ABB와 기술 협력</a> - 거제타임즈
  </li>
  <li style='margin-bottom: 8px;'>
    <a href='https://n.news.naver.com/mnews/article/092/0002444104' target='_blank' style='color: #2563EB; text-decoration: none; font-weight: 600;'>[AI 고속도로] 美 주지사 당선·우세 36명 중 34명 '데이터센터 규제'…AI 투자 변수로</a> - 지디넷코리아
  </li>
  <li style='margin-bottom: 8px;'>
    <a href='https://www.newsis.com/view/NISX20261105_0003856315' target='_blank' style='color: #2563EB; text-decoration: none; font-weight: 600;'>메타 "美 밖에 데이터센터 지어야 하나"…오픈AI도 민주당 압승에 고심</a> - 뉴시스
  </li>
</ul>


<div class='infraops-series-crosslinks' style='margin-top: 44px; padding: 20px 24px; background-color: #F8FAFC; border: 1px solid #CBD5E1; border-top: 3px solid #0284C7; border-radius: 8px; font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif;'><div style='font-size: 13.5px; font-weight: 800; color: #0F172A; letter-spacing: 0.2px; margin-bottom: 12px;'>📚 오늘 함께 발행된 InfraOps 인텔리전스 시리즈 (2026.11.06)</div><table border='0' cellpadding='0' cellspacing='0' width='100%' style='background-color: #FFFFFF; border: 1px solid #E2E8F0; border-collapse: collapse;'><tr style='background-color: #FFFFFF;'><td width='120' valign='middle' style='padding: 9px 8px 9px 12px; border-bottom: 1px solid #F1F5F9; white-space: nowrap;'><span style='background-color: #EDE9FE; color: #6D28D9; font-size: 11px; font-weight: 800; padding: 2px 7px; border-radius: 4px; display: inline-block;'>🎧 PODCAST</span></td><td valign='middle' style='padding: 9px 12px 9px 4px; border-bottom: 1px solid #F1F5F9; font-size: 13.5px; line-height: 1.45;'><a href='https://ywmoon.github.io/#article/2026-11-06-10min-tech-podcast' target='_blank' style='color: #0F172A; font-weight: 700; text-decoration: none;'>US Midterm Moratorium Shock, Neocloud Lease Retrenchment, and Next-Gen DC Power Paradigms <span style='color: #6D28D9; font-size: 11.5px; font-weight: 700;'>➔</span></a></td></tr><tr style='background-color: #F8FAFC;'><td width='120' valign='middle' style='padding: 9px 8px 9px 12px; border-bottom: 1px solid #F1F5F9; white-space: nowrap;'><span style='background-color: #E0F2FE; color: #0369A1; font-size: 11px; font-weight: 800; padding: 2px 7px; border-radius: 4px; display: inline-block;'>📰 BRIEFING</span></td><td valign='middle' style='padding: 9px 12px 9px 4px; border-bottom: 1px solid #F1F5F9; font-size: 13.5px; line-height: 1.45;'><a href='https://ywmoon.github.io/#article/2026-11-06-daily-infraops-briefing' target='_blank' style='color: #0F172A; font-weight: 700; text-decoration: none;'>글로벌 인프라 브리핑: 美 중간선거發 지자체 규제 쓰나미 &amp; 마이크로소프트의 네오클라우드 통제권 회수 <span style='color: #0369A1; font-size: 11.5px; font-weight: 700;'>➔</span></a></td></tr><tr style='background-color: #FFFFFF;'><td width='120' valign='middle' style='padding: 9px 8px 9px 12px; border-bottom: 1px solid #F1F5F9; white-space: nowrap;'><span style='background-color: #CCFBF1; color: #0F766E; font-size: 11px; font-weight: 800; padding: 2px 7px; border-radius: 4px; display: inline-block;'>🔬 DEEP DIVE</span></td><td valign='middle' style='padding: 9px 12px 9px 4px; border-bottom: 1px solid #F1F5F9; font-size: 13.5px; line-height: 1.45;'><a href='https://ywmoon.github.io/#article/2026-11-06-deepdive-aws-continuum-context-graph-remediation' target='_blank' style='color: #0F172A; font-weight: 700; text-decoration: none;'>정적 경고에서 토폴로지 인지형 자율 교정으로: AWS 컨티뉴엄과 클라우드 보안 복원력 아키텍처의 전환 <span style='color: #0F766E; font-size: 11.5px; font-weight: 700;'>➔</span></a></td></tr><tr style='background-color: #F8FAFC;'><td width='120' valign='middle' style='padding: 9px 8px 9px 12px;  white-space: nowrap;'><span style='background-color: #F1F5F9; color: #334155; font-size: 11px; font-weight: 800; padding: 2px 7px; border-radius: 4px; display: inline-block;'>📧 FULL ARCHIVE</span></td><td valign='middle' style='padding: 9px 12px 9px 4px;  font-size: 13.5px; line-height: 1.45;'><a href='https://ywmoon.github.io/#article/2026-11-06-dc-infraops-trends-report' target='_blank' style='color: #0F172A; font-weight: 700; text-decoration: none;'>DC InfraOps Trends (2026년 11월 06일) — 국내외 전체 기사 아카이브 <span style='color: #334155; font-size: 11.5px; font-weight: 700;'>➔</span></a></td></tr></table></div>
</div>