---
id: 2026-10-02-daily-infraops-briefing
title: "[2026.10.02] 오늘의 글로벌 클라우드 & 데이터센터 인프라 핵심 동향 브리핑"
date: 2026-10-02
time: "05:56"
category: Daily Briefing
status: published
summary: "Daily InfraOps Digest | Global Cloud & Data Center Intelligence 글로벌 AI 데이터센터 인프라 동향: 기저부하 원전 20년 장기계약, 랙 냉각 아키텍처 생태계 재편 및 자체 가속기 동맹 2026년 10월 2일 기준 글로벌 클라우드 제공업체(CSP), 전력 유틸리티, 냉각 솔루션 제조사 및 AI 인프라 스타트"
labels:
  - AWS
  - 클라우드
  - 데이터센터
  - AI인프라
  - 인프라동향
  - 액체냉각
  - 원전PPA
  - 구글클라우드
---

<div style='font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; line-height: 1.8; color: #1e293b; max-width: 860px; margin: 0 auto; word-break: keep-all;'>

  <!-- 리포트 헤더 배너 -->
  <div style='background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); color: #ffffff; padding: 32px 28px; border-radius: 12px; margin-bottom: 32px;'>
    <div style='font-size: 13px; font-weight: 700; color: #38bdf8; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;'>Daily InfraOps Digest | Global Cloud & Data Center Intelligence</div>
    <h1 style='font-size: 26px; line-height: 1.4; font-weight: 800; margin: 0 0 12px 0; color: #f8fafc;'>글로벌 AI 데이터센터 인프라 동향: 기저부하 원전 20년 장기계약, 랙 냉각 아키텍처 생태계 재편 및 자체 가속기 동맹</h1>
    <p style='font-size: 14px; color: #94a3b8; margin: 0; line-height: 1.6;'>2026년 10월 2일 기준 글로벌 클라우드 제공업체(CSP), 전력 유틸리티, 냉각 솔루션 제조사 및 AI 인프라 스타트업의 핵심 기술 동향과 투자 흐름을 분석합니다.</p>
  </div>

  <!-- 📌 오늘의 3대 핵심 관전 포인트 -->
  <div style='background-color: #f8fafc; border: 1px solid #e2e8f0; border-left: 5px solid #2563eb; border-radius: 8px; padding: 24px; margin-bottom: 36px;'>
    <h2 style='font-size: 18px; font-weight: 700; color: #0f172a; margin-top: 0; margin-bottom: 16px; display: flex; align-items: center;'>
      📌 오늘의 3대 핵심 관전 포인트 (Key Highlights)
    </h2>
    <ul style='margin: 0; padding-left: 20px; color: #334155; font-size: 15px;'>
      <li style='margin-bottom: 10px;'>
        <strong>아마존-콘스텔레이션 에너지의 20년 원전 PPA 체결:</strong> 메릴랜드주 캘버트 클리프스(Calvert Cliffs) 원자력 발전소와 장기 전력구매계약을 체결하며 간헐성 재생에너지를 넘어 무탄소 24/7 기저부하(Base-load) 전력망을 직접 편입하는 전략이 확산되고 있습니다.
      </li>
      <li style='margin-bottom: 10px;'>
        <strong>엔비디아 생태계 중심 고밀도 냉각 공급망 재편:</strong> 오텍캐리어의 1.3MW급 AI 데이터센터 전용 냉각 시스템 인증 및 LG전자의 냉각 솔루션 공식 파트너 진입으로 랙당 100kW를 초과하는 고발열 AI 클러스터 대응을 위한 K-공조 설비의 글로벌 진출이 구체화되었습니다.
      </li>
      <li>
        <strong>자체 AI 실리콘 자립 가속과 네오클라우드 투자:</strong> 아마존이 시놉시스와 10억 달러 이상의 반도체 EDA/IP 동맹을 맺고 Trainium 설계를 가속화하는 한편, 엔비디아와 국내 VC 컨소시엄은 특화 GPU 클라우드 인프라 기업 GMI클라우드에 투자를 단행하며 인프라 계층의 다변화를 추진하고 있습니다.
      </li>
    </ul>
  </div>

  <!-- 테마 섹션 1 -->
  <h2 style='font-size: 21px; font-weight: 700; color: #0f172a; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px; margin-top: 40px; margin-bottom: 20px;'>
    1. 기저부하(Base-load) 전력 확보전: 아마존의 20년 원전 PPA와 구글의 인프라 인허가 돌파구
  </h2>
  <p style='font-size: 15px; color: #334155; margin-bottom: 16px;'>
    하이퍼스케일 AI 데이터센터의 전력 수요가 기가와트(GW) 단위로 급증함에 따라, 빅테크의 전력 수급 전략이 간헐성이 높은 풍력·태양광 중심의 PPA(전력구매계약)에서 24시간 안정적으로 가동되는 대형 상용 원전으로 전환되고 있습니다. 로이터 통신과 주요 외신에 따르면, 아마존(Amazon)은 미국 최대 원자력 발전 기업인 콘스텔레이션 에너지(Constellation Energy)와 20년 장기 전력 구매 계약을 공식 체결했습니다.
  </p>
  <p style='font-size: 15px; color: #334155; margin-bottom: 16px;'>
    이번 계약은 미국 메릴랜드주에 위치한 캘버트 클리프스(Calvert Cliffs) 원자력 발전소에서 생산되는 무탄소 전력을 아마존 웹 서비스(AWS)의 버지니아 및 수도권 일대 데이터센터 클러스터에 공급하는 것을 골자로 합니다. 캘버트 클리프스 원전은 2기의 가압경수로(PWR)를 갖추고 총 1.7GW 이상의 발전 용량을 보유하고 있으며, 2034년과 2036년까지 연장 운전 면허를 이미 확보한 안정적인 전력원입니다. 아마존은 이번 장기 계약을 통해 대규모 전력 소비에 따른 전력망 부하 우려를 해소하고, 연방에너지규제위원회(FERC)의 그리드 병목 규제를 선제적으로 우회하려는 포석을 마련한 것으로 분석됩니다.
  </p>
  <div style='background-color: #f1f5f9; border-left: 4px solid #475569; padding: 14px 18px; margin: 18px 0; font-size: 14px; color: #1e293b;'>
    <strong>전력망 연계 분석:</strong> 대규모 연산 설비가 밀집된 미국 PJM 전력망 인터커넥션 대기열(Interconnection Queue)이 평균 5년 이상 지연되는 상황에서, 기존 상용 원전 부지 인근 연계 및 장기 전력 직공급 구조는 신규 송전선로 증설 리스크를 완화하고 데이터센터 전력 가용률(Availability)을 극대화하는 현실적인 대안으로 정착되고 있습니다.
  </div>
  <p style='font-size: 15px; color: #334155; margin-bottom: 24px;'>
    한편, 구글(Google) 역시 미시간주 데이터센터 신축 프로젝트와 관련하여 지역 전력 유틸리티와의 대규모 전력 공급 협약 및 지자체 세제 감면안에 대한 이중 승인을 확보했습니다. 크레인스 디트로이트 비즈니스 보도에 따르면, 현지 규제 당국인 미시간 공공서비스위원회(MPSC)는 대규모 전력 수용가를 위한 특화 요금제 계약을 정식 인가했으며, 지방 의회는 다년간에 걸친 장비 재산세 감면안을 통과시켰습니다. 이는 인프라 확장 속도가 지역 주민의 전력 요금 전가 우려 및 지방 정부 인허가 리스크와 직결되는 국면에서, 전력 인입 계획과 세제 인센티브를 선제적으로 일괄 타결한 대표 사례로 평가됩니다.
  </p>

  <!-- 테마 섹션 2 -->
  <h2 style='font-size: 21px; font-weight: 700; color: #0f172a; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px; margin-top: 40px; margin-bottom: 20px;'>
    2. 초고밀도 랙 열관리 아키텍처: 엔비디아 공급망에 진입하는 K-공조·냉각 기술
  </h2>
  <p style='font-size: 15px; color: #334155; margin-bottom: 16px;'>
    차세대 AI 서버 랙의 열설계전력(TDP)이 랙당 100kW에서 최대 130kW를 상회하면서, 공랭식 팬 기반 냉각 기술의 물리적 한계가 명확해졌습니다. 이에 따라 냉각수 분배 장치(CDU, Coolant Distribution Unit), 직접 칩 액체냉각(Direct-to-Chip D2C), 고효율 인버터 칠러(Chiller)를 아우르는 통합 열관리 아키텍처가 데이터센터 PUE(전력효율지수) 개선의 핵심 변수로 부상했습니다. 금일 보도에 따르면 국내 공조 기업들이 엔비디아의 정식 레퍼런스 생태계에 연이어 진입하며 글로벌 인프라 공급망의 핵심 축으로 안착하고 있습니다.
  </p>
  <p style='font-size: 15px; color: #334155; margin-bottom: 16px;'>
    오텍캐리어는 1.3MW급 AI 데이터센터 전용 냉각 장치에 대해 엔비디아의 기술 인증을 완료했다고 밝혔습니다. 이 시스템은 서버 랙 내부로 인입되는 냉각수의 온도와 압력을 정밀 제어하는 고용량 액체 냉각 루프를 갖추고 있으며, 연내 2.6MW급 초고용량 복합 냉각 장비까지 라인업을 확대할 계획입니다. 오텍캐리어는 고집적 GPU 부하 변동에 따라 펌프 및 압축기 회전수를 유연하게 제어하는 인버터 기술을 탑재하여 부분 부하 상태에서도 에너지 손실을 최소화하는 설계를 적용했습니다.
  </p>
  <p style='font-size: 15px; color: #334155; margin-bottom: 16px;'>
    LG전자 역시 엔비디아 AI 데이터센터 냉각 솔루션의 공식 파트너로 최종 선정되었습니다. LG전자는 오일 프리(Oil-free) 마그네틱 베어링을 적용한 대형 터보 칠러와 외기 도입형 프리쿨링(Free-cooling) 시스템, 고효율 CDU를 결합한 통합 엔드투엔드 냉각 설루션을 글로벌 하이퍼스케일러 데이터센터에 납품할 수 있는 교두보를 마련했습니다. 고온의 냉각수를 칩셋 표면에 직접 접촉시켜 열을 흡수하는 액랭 루프와, 외부로 열을 배출하는 외기 연동형 칠러 사이의 열교환 효율을 극대화한 것이 주효했던 것으로 분석됩니다.
  </p>
  <div style='background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 18px; margin: 20px 0;'>
    <h3 style='font-size: 16px; font-weight: 700; color: #1e293b; margin-top: 0; margin-bottom: 10px;'>💡 AI 랙 액체냉각 시스템 사양 및 기술 전환 포인트</h3>
    <ul style='margin: 0; padding-left: 20px; color: #475569; font-size: 14px;'>
      <li style='margin-bottom: 6px;'><strong>랙당 열밀도:</strong> 종전 20~40kW 수준에서 최신 가속기 클러스터 도입 시 랙당 100~132kW 이상으로 급증</li>
      <li style='margin-bottom: 6px;'><strong>냉각 매체 전환:</strong> CRAH/CRAC 중심의 공랭 순환에서 Cold Plate 기반 Direct-to-Chip 액체 냉각 루프로 전면 교체</li>
      <li><strong>플랜트 단위 용량:</strong> 개별 모듈당 1.3MW~2.6MW급 대형 칠러 및 병렬 CDU 구성을 통한 N+1 중복성(Redundancy) 확보 필수</li>
    </ul>
  </div>

  <!-- 테마 섹션 3 -->
  <h2 style='font-size: 21px; font-weight: 700; color: #0f172a; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px; margin-top: 40px; margin-bottom: 20px;'>
    3. 자체 실리콘 자립과 인프라 분화: AWS-시놉시스 10억 달러 동맹과 GMI클라우드 투자
  </h2>
  <p style='font-size: 15px; color: #334155; margin-bottom: 16px;'>
    AI 인프라 연산 비용 최적화와 특정 가속기 벤더 의존도 완화를 위한 빅테크의 맞춤형 실리콘(Custom Silicon) 내재화가 가속화되고 있습니다. 중앙이코노미뉴스 보도에 따르면, 아마존은 글로벌 반도체 설계 자동화(EDA) 및 지적재산권(IP) 선도 기업인 시놉시스(Synopsys)와 10억 달러(한화 약 1조 3,500억 원) 이상의 다년 전략적 제휴를 체결했습니다.
  </p>
  <p style='font-size: 15px; color: #334155; margin-bottom: 16px;'>
    아마존 산하 안나푸르나 랩스(Annapurna Labs)는 자체 개발한 AI 학습용 칩 '트레이니엄(Trainium)'과 추론용 칩 '인퍼런시아(Inferentia)', 그리고 범용 ARM 기반 CPU인 '그래비톤(Graviton)' 시리즈의 후속 모델 설계를 진행 중입니다. 이번 동맹을 통해 아마존은 시놉시스의 최첨단 EDA 소프트웨어, 검증 솔루션, 실리콘 IP를 클라우드 환경에서 전면 활용하게 되며, 시놉시스는 자사의 엔지니어링 워크로드를 AWS 클라우드로 대규모 이전하게 됩니다. 이는 반도체 설계 주기(Tape-out cycle)를 단축하고, 양산 칩의 성능 대비 전력 효율을 극대화하여 데이터센터 단위 인프라 TCO를 대폭 절감하려는 전략으로 풀이됩니다.
  </p>
  <p style='font-size: 15px; color: #334155; margin-bottom: 24px;'>
    동시에 인프라 서비스 계층에서는 거대 CSP의 빈틈을 파고드는 네오클라우드(Neo-cloud) 생태계가 빠르게 성장하고 있습니다. 조선비즈에 따르면 KB인베스트먼트 등 국내 벤처캐피털 컨소시엄은 엔비디아와 공동으로 미국 AI 클라우드 인프라 스타트업 GMI클라우드(GMI Cloud)에 전략적 투자를 단행했습니다. GMI클라우드는 엔비디아의 최신 GPU 클러스터를 기반으로 베어메탈 및 고성능 연산 자원을 온디맨드로 공급하는 전문 인프라 기업입니다. 대형 클라우드의 복잡한 오버헤드 없이 고밀도 연산 파이프라인만을 전담하는 독립형 인프라 제공업체의 등장은, AI 엔지니어링 팀에게 보다 유연한 멀티 클라우드 배치 옵션을 제공할 것으로 전망됩니다.
  </p>

  <!-- 테마 섹션 4 -->
  <h2 style='font-size: 21px; font-weight: 700; color: #0f172a; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px; margin-top: 40px; margin-bottom: 20px;'>
    4. 극단적 인프라 확장: 우주 궤도 데이터센터를 시험하는 구글 '프로젝트 선캐처'
  </h2>
  <p style='font-size: 15px; color: #334155; margin-bottom: 16px;'>
    지상에서의 전력망 병목, 환경 규제, 용지 부족이 심화됨에 따라 장기적인 관점에서 우주 공간을 새로운 연산 거점으로 활용하려는 기술적 시도가 첫 실증 단계에 진입했습니다. 사이언티픽 아메리칸(Scientific American)에 따르면, 구글의 차세대 AI 데이터센터 시험 위성인 '프로젝트 선캐처(Project Suncatcher)'가 스페이스X(SpaceX) 로켓에 탑재되어 지구 저궤도(LEO)에 안착했습니다.
  </p>
  <p style='font-size: 15px; color: #334155; margin-bottom: 16px;'>
    프로젝트 선캐처는 궤도 상에서 대기권의 간섭 없이 연중 24시간 태양광 발전을 통해 전력을 자체 공급받고, 심우주의 극저온 환경을 방열판으로 활용하여 냉각수를 소모하지 않는 데이터센터 하드웨어 아키텍처를 검증하는 실험 프로젝트입니다. 이번 발사를 통해 구글은 우주 방사선 환경에서의 반도체 오류율(Single Event Upset, SEU) 억제 능력, 궤도-지상 간 및 위성 간 초고속 레이저 광통신(Optical Inter-satellite Links) 대역폭의 안정성을 집중 테스트할 예정입니다. 비록 상용화까지는 발사 비용과 유지보수의 한계가 존재하지만, 하이퍼스케일러가 직면한 지상 전력망 한계를 극복하기 위한 혁신적 엔지니어링 로드맵의 지평을 넓혔다는 점에서 주목됩니다.
  </p>

  <!-- 🔗 오늘의 주요 큐레이션 링크 -->
  <div style='background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 22px; margin-top: 40px;'>
    <h2 style='font-size: 17px; font-weight: 700; color: #0f172a; margin-top: 0; margin-bottom: 14px;'>
      🔗 오늘의 주요 큐레이션 링크 (Curated Sources)
    </h2>
    <ul style='list-style: none; padding-left: 0; margin: 0; font-size: 14px; line-height: 1.9;'>
      <li style='border-bottom: 1px dashed #e2e8f0; padding-bottom: 8px; margin-bottom: 8px;'>
        <span style='color: #2563eb; font-weight: 600;'>[Reuters]</span> 
        <a href='https://news.google.com/rss/articles/CBMixgFBVV95cUxQZXZ3aTZxb1U3ZFZ1UmJER0NVelhZd2M2cGk1VGw1dHppMy04Y011a1NaT1JvSkJSUmVUZ0M4WHFzS0p0ODdna0RFZk9HY1MyelM4Smlfb1dGUnc2UkJuUzdLVHlMaS1Sb0VtMFQ2VVFzbnNDSVdTZk1XR0tKNkpaWEJIQXQyYXZYSmdJc3B1SDRfR3dxZGVjc2hyQVJSVjI2NEZHdUNzUnFpVHp4NFdtYVB4SEFaa1Q2cHNNNERqUnA2RTdHa0E?oc=5' target='_blank' style='color: #0f172a; text-decoration: none;'>Constellation, Amazon sign 20-year power deal to support Maryland nuclear plant</a>
      </li>
      <li style='border-bottom: 1px dashed #e2e8f0; padding-bottom: 8px; margin-bottom: 8px;'>
        <span style='color: #2563eb; font-weight: 600;'>[데일리안]</span> 
        <a href='https://news.google.com/rss/articles/CBMijgJBVV95cUxPSldQdGJHamJRaF9ael9Kbk5iY3F4VVBjTzVOenp3MzRqNkRwclZmX3R1TGdtb21rTTl3SFZDMG42cEdMRVc0OEJ5VldYcDhHbG1PaXVUOWZZMHB5YnBJYkxMbUlVYXUwdVFWWTZKYlNXb3VxWmpOTnV4dGtJTUFnYS1lXzQ3NlNuTThubl9TQk1iVDVKcVVfUk10S2lUUU5YTU1xdDlpcXRPcEJOdUxOenNuQnJlSC15ZDRJQkpJU1VZQjh4VlIyNmNmc2JHZHFZR21IVTRoYzl2OWhMWVJBYXh2SU4tOVUweHdUal9tN2xfZ0g5a3ZzTzFZZk1zSWhDSjctNm02U1hxal9nbHc?oc=5' target='_blank' style='color: #0f172a; text-decoration: none;'>AI 전력 확보전 나선 아마존…美원전 전기 20년치 장기계약</a>
      </li>
      <li style='border-bottom: 1px dashed #e2e8f0; padding-bottom: 8px; margin-bottom: 8px;'>
        <span style='color: #2563eb; font-weight: 600;'>[Chosunbiz]</span> 
        <a href='https://news.google.com/rss/articles/CBMilgFBVV95cUxNUXhIVkF5ZDJmSTgtZ1FMSFBsVDNrLXB5Znc0akh3QjhHRzBjeUlYNDZteHdSTDVzeE5aS20td3N2cDJLbVdIUFlsYUVrZFZmcURmYnNYNFlRcGRWVHYzQW9Cd0RGQmtKSXVFbHpxMGtjNWRpUk00VUFkTHJLS01wQnVUZ1BoV0g0V015bU9wVnJvRUgtVXfSAZYBQVVfeXFMTVF4SFZBeWQyZkk4LWdRTEhQbFQzay1weWZ3NGpId0I4R0cwY3lJWDQ2bXh3Ukw1c3hOWkttLXdzdnAyS21XSFBZbGFFa2RWZnFEZmJzWDRZUXBkVlR2M0FvQndERkJrSkl1RWx6cTBrYzVkaVJNNFVBZExyS0tNcEJ1VGdQaFdINFdNeW1PcFZyb0VILVV3?oc=5' target='_blank' style='color: #0f172a; text-decoration: none;'>오텍캐리어, 1.3㎿ AI 데이터센터 냉각장치 엔비디아 인증… “2.6㎿ 제품도 개발”</a>
      </li>
      <li style='border-bottom: 1px dashed #e2e8f0; padding-bottom: 8px; margin-bottom: 8px;'>
        <span style='color: #2563eb; font-weight: 600;'>[주간동아]</span> 
        <a href='https://news.google.com/rss/articles/CBMiaEFVX3lxTE5INllHV2ZFcjYxai1ieF9rcGQ0dEhUTUt3MVFtdWI0Um5Fc3h5OWlrcTJuVVRhT0ZHelppVlBHa3N2THFRME05ZlJFN2JaSGJvT0VWbHFkNndMT0tnN0hJQjczeXRjblB6?oc=5' target='_blank' style='color: #0f172a; text-decoration: none;'>LG전자, 엔비디아 AI 데이터센터 냉각솔루션 공식 파트너 선정</a>
      </li>
      <li style='border-bottom: 1px dashed #e2e8f0; padding-bottom: 8px; margin-bottom: 8px;'>
        <span style='color: #2563eb; font-weight: 600;'>[중앙이코노미뉴스]</span> 
        <a href='https://news.google.com/rss/articles/CBMickFVX3lxTE1HRl92bm96ZkNqYmc4WW94dzNiTFY5WXFqem5hY2ZoWjRSc1I2eVRmWUdsWW8zU0psT3pqQ0dUOEZVMXRUZHIxbVlOWURDa3Q4RFRDZzdCSE9ES01jNmhDNUZSeUVRUVVMX240S3IySHN2Zw?oc=5' target='_blank' style='color: #0f172a; text-decoration: none;'>美 아마존, 시놉시스와 10억달러+ 반도체 동맹…AWS 자체 AI칩 개발 가속</a>
      </li>
      <li style='border-bottom: 1px dashed #e2e8f0; padding-bottom: 8px; margin-bottom: 8px;'>
        <span style='color: #2563eb; font-weight: 600;'>[Chosunbiz]</span> 
        <a href='https://news.google.com/rss/articles/CBMiiAFBVV95cUxOcENNVzBsQTVNSFM5cmJIX3ZKLWZOZjVyTFo1a3dlc3Exd0I0Z1B6OTF5T3RWM21VUmsxN2JmWTg2eEpWRHJxRUNVSnVudF8wSk93RUVfc3Q4aHFRVEdEUGROU2ViU3ViYUNOYy1HdHdld2pNYmxmd3M3NFhnbmdSNzlzZnBuN0M20gGcAUFVX3lxTE9mMFE2NkRUTTVWd3VJbm5ZS0toVlhwZXN5cDhMV3hNMVpSVkRUaVhvckstQ0hyS3RRTTduQlNvOE5rVEQ4LTBUdzhYZEU3VXZLS2t2Tk1ONjg1X2dCNk5zV00tejR2el9kNEZ4NS0tZmRVeDg1cFFrOXFBb0IxZFhSY0xuUDZzMy1ZQUpMNEtYTWs2cWI1SUhkcnAxMw?oc=5' target='_blank' style='color: #0f172a; text-decoration: none;'>KB인베 등 국내 VC, 엔비디아와 美 AI 인프라 기업 GMI클라우드에 투자</a>
      </li>
      <li style='border-bottom: 1px dashed #e2e8f0; padding-bottom: 8px; margin-bottom: 8px;'>
        <span style='color: #2563eb; font-weight: 600;'>[Crain's Detroit Business]</span> 
        <a href='https://news.google.com/rss/articles/CBMiowFBVV95cUxQWXdxUFJaVDhUM2NoV0tLSE9TOFhRUlV1cTZybXZtYWVWczZJVDNCTUlTVlJYazRLT3J6N3FGdmw2TWI0YUZsRGh3eEc2cVNWZUVEOEpiYVR5RVdoMjY4RnQ5bVEwZEpFMUlQUktZWWl5bGl1OGs1NmRpTEpaYkczeThoNVk2MENlVGlpVEI4OW82NE12LTh5VWgyRGZ4YWd2UlE0?oc=5' target='_blank' style='color: #0f172a; text-decoration: none;'>Google data center gets 2 big green lights on tax breaks, power contracts</a>
      </li>
      <li>
        <span style='color: #2563eb; font-weight: 600;'>[Scientific American]</span> 
        <a href='https://news.google.com/rss/articles/CBMi3AFBVV95cUxOMk9tdW43a2RZc3dkUDVsSjZ0OVRiclZSUzlFTmx0WHlGY3J4aXI4d2xkREV1YlE4aDVsM3h5VzBhVVM0bjJrQXl5SEZjcGxCM0FVZm16S29UOENmeTZyUmVHRTYzQ0JsQk9jWXVlWDdYS3dVNjdkT1ZBa05NRnlad0sxbEV5eUZiQnRUeE5nZ1lqLUh2RjczZ0xKSUVpY3hpaXVEajhQNFF4dVo5VEFnY2trYkFfdHppZEs1c21IVVpOY2tPRnhEd3p2cHVsMUZBOEJIbk9rZjRfYmVC?oc=5' target='_blank' style='color: #0f172a; text-decoration: none;'>Google’s Project Suncatcher AI data center test has officially launched to space aboard SpaceX rocket</a>
      </li>
    </ul>
  </div>

</div>