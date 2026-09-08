---
id: 2026-09-09-daily-infraops-briefing
title: "[2026.09.09] 오늘의 글로벌 클라우드 & 데이터센터 인프라 핵심 동향 브리핑"
date: 2026-09-09
time: "05:55"
category: Daily Briefing
status: published
summary: "DAILY INFRA DIGEST 글로벌 클라우드 & 데이터센터 인프라 핵심 동향 브리핑 발행일자: 2026년 9월 9일 | 인프라 아키텍처·에너지 그리드·실리콘 생태계 심층 분석 📌 오늘의 3대 핵심 관전 포인트 (Key Highlights) 빅테크-팹리스 간 조 단위 지분 연계(Equity Warrant)와 맞춤형 추론 실리콘 동맹: AWS가 퀄컴과 향"
labels:
  - AWS
  - 퀄컴
  - 구글
  - 데이터센터
  - AI인프라
  - 에너지저장장치
  - LDES
  - Valkey
  - 클라우드
---

<div style='font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; line-height: 1.8; color: #1E293B; max-width: 860px; margin: 0 auto; padding: 20px 10px;'>

  <header style='border-bottom: 2px solid #E2E8F0; padding-bottom: 20px; margin-bottom: 32px;'>
    <div style='display: inline-block; background-color: #0F172A; color: #FFFFFF; font-size: 13px; font-weight: 700; padding: 4px 10px; border-radius: 4px; margin-bottom: 12px; letter-spacing: 0.5px;'>DAILY INFRA DIGEST</div>
    <h1 style='font-size: 28px; font-weight: 800; color: #0F172A; margin: 0 0 12px 0; line-height: 1.35;'>글로벌 클라우드 & 데이터센터 인프라 핵심 동향 브리핑</h1>
    <p style='font-size: 15px; color: #64748B; margin: 0;'>발행일자: 2026년 9월 9일 | 인프라 아키텍처·에너지 그리드·실리콘 생태계 심층 분석</p>
  </header>

  <!-- 3대 핵심 관전 포인트 -->
  <section style='background-color: #F8FAFC; border: 1px solid #E2E8F0; border-left: 5px solid #2563EB; border-radius: 8px; padding: 24px; margin-bottom: 40px;'>
    <h2 style='font-size: 18px; font-weight: 700; color: #1E3A8A; margin-top: 0; margin-bottom: 16px; display: flex; align-items: center;'>
      <span style='margin-right: 8px;'>📌</span> 오늘의 3대 핵심 관전 포인트 (Key Highlights)
    </h2>
    <ul style='margin: 0; padding-left: 20px; color: #334155; font-size: 15px;'>
      <li style='margin-bottom: 10px;'>
        <strong>빅테크-팹리스 간 조 단위 지분 연계(Equity Warrant)와 맞춤형 추론 실리콘 동맹:</strong> AWS가 퀄컴과 향후 10년간 최대 600억 달러 구매 연동형 신주인수권 계약을 체결하고 차세대 추론 칩 및 광학 인터커넥트를 공동 개발합니다. 엔비디아 의존도를 낮추기 위한 구조적 파트너십이 한층 고도화되고 있습니다.
      </li>
      <li style='margin-bottom: 10px;'>
        <strong>24/7 무탄소 전력(CFE)을 향한 다계층 배터리(LDES)와 원전 기저부하 결합:</strong> 구글이 웨스트버지니아에서 86MW 태양광에 4시간 리튬이온 배터리와 10시간 아연계 장주기 저장장치(LDES)를 결합한 하이브리드 전력망 프로젝트에 참여하며, 미 정부는 19억 달러 대출 보증으로 아이오와 원전 재가동을 공식 지원합니다.
      </li>
      <li>
        <strong>CXL 기반 데이터센터 단일 칩화 및 신흥 지역 거점 다변화:</strong> 메타와 파네시아의 CXL 패브릭 협력을 통한 클러스터 단위 메모리 풀링 실증, 오픈AI의 말레이시아 액체냉각 데이터센터 확보, AT&T의 저궤도(LEO) 위성 결합 백홀 등 인프라 아키텍처 전반의 병목 해소 작업이 가속화되고 있습니다.
      </li>
    </ul>
  </section>

  <!-- 섹션 1 -->
  <section style='margin-bottom: 48px;'>
    <h2 style='font-size: 22px; font-weight: 700; color: #0F172A; border-bottom: 1px solid #CBD5E1; padding-bottom: 10px; margin-bottom: 20px;'>
      1. [실리콘·인터커넥트] 빅테크-팹리스 '지분 연계' 동맹과 CXL 기반 클러스터 단일 칩화
    </h2>
    <p style='font-size: 16px; margin-bottom: 16px;'>
      생성형 AI 워크로드가 대규모 모델 학습 단계에서 서비스 상용화를 위한 추론(Inference) 단계로 중심축을 이동함에 따라, 하이퍼스케일러들의 칩 공급망 전략이 단순 구매 계약을 넘어 대규모 지분 인수가 결합된 전략적 동맹 형태로 진화하고 있습니다. 2026년 9월 8일 발표된 아마존웹서비스(AWS)와 퀄컴(Qualcomm)의 다년 협약은 이러한 구조적 변화를 명확하게 보여주는 대표적 사례입니다.
    </p>
    <p style='font-size: 16px; margin-bottom: 16px;'>
      이번 협약의 핵심은 모바일 반도체 분야에서 축적된 퀄컴의 초저전력 칩 설계 역량을 데이터센터 서버용 AI 추론 반도체에 이식하고, AWS의 핵심 머신러닝 플랫폼인 '아마존 베드록(Amazon Bedrock)' 인프라에 통합 배치하는 데 있습니다. 특히 주목할 지점은 계약의 재무적 구조입니다. 퀄컴은 AWS에 자사 보통주 375만 주의 신주인수권(Warrant)을 우선 부여하며, 향후 10년간 AWS의 칩, 하드웨어 기술, 관련 서비스 구매 누적액이 최대 600억 달러에 도달할 경우 신주인수권 발행 총량이 최대 2,500만 주까지 순차 확대되는 구조를 채택했습니다. 고정 행사 가격은 주당 161.26달러로 책정되었으며, AWS가 권리를 전량 행사할 경우 약 40억 달러(한화 약 5조 4천억 원) 규모의 지분을 확보하게 됩니다.
    </p>
    <blockquote style='background-color: #F1F5F9; border-left: 4px solid #475569; margin: 20px 0; padding: 14px 20px; font-style: italic; color: #334155;'>
      "AI 수요가 가속함에 따라 데이터센터 인프라는 더 높은 성능을 효율적으로 제공하기 위해 연산과 연결성 양쪽 모두에서 발전이 필요합니다." <br>
      <span style='font-style: normal; font-size: 14px; font-weight: 600; color: #64748B;'>— 크리스티아누 아몬(Cristiano Amon) 퀄컴 최고경영자(CEO)</span>
    </blockquote>
    <p style='font-size: 16px; margin-bottom: 16px;'>
      아몬 CEO의 언급처럼, 양사는 연산 실리콘 개발에 그치지 않고 대규모 클러스터 내부의 대역폭 한계를 극복하기 위한 '초고속 광학 연결(High-Bandwidth Optical Connectivity) 솔루션'을 공동 개발하기로 합의했습니다. 구리 배선 기반 인터커넥트가 랙당 100kW 이상의 고집적 환경에서 열 방출 및 신호 감쇄 한계에 직면함에 따라, 광학 소자를 컴퓨팅 칩 인근에 배치하거나 패브릭 레벨에 직접 연결하는 광학 인터커넥트 기술이 데이터센터 인프라의 필수 요건으로 부상하고 있음을 보여줍니다.
    </p>
    <p style='font-size: 16px; margin-bottom: 16px;'>
      이러한 고객사 맞춤형 지분 연계 파트너십은 업계 전반으로 확산되는 추세입니다. 엔비디아 단일 공급망에 대한 기술적·재무적 종속성을 분산시키기 위해, AMD는 오픈AI의 칩 구매 규모에 따라 자사 지분을 최대 10% 인수할 수 있는 권리를 부여한 바 있으며, 마벨 테크놀로지(Marvell Technology) 역시 구글과 최대 122억 달러 규모의 지분 인수권 연계 계약을 맺은 바 있습니다. 팹리스 기업은 대규모 장기 수요처를 확보하고, 클라우드 사업자는 전용 하드웨어 최적화와 함께 공급사 주가 상승에 따른 자본 이득을 공유하는 오프밸런스 형태의 협력이 표준 모델로 자리 잡고 있습니다.
    </p>
    <p style='font-size: 16px; margin-bottom: 16px;'>
      한편 실리콘 인터커넥트 계층에서는 차세대 CXL(Compute Express Link) 기술을 활용해 서버 랙과 데이터센터 전체를 거대한 단일 메모리 풀로 연결하려는 시도가 구체화되고 있습니다. 메타(Meta)와 CXL 전문 기업 파네시아(Panmnesia)의 협력은 분산 노드 간 메모리 단편화 문제를 해결하고, 노드 간 데이터 복사 오버헤드 없이 수백 개의 가속기가 메모리 공간을 공유할 수 있는 패브릭 토폴로지를 구축하는 데 집중되고 있습니다. 이는 AI 모델 파라미터가 조 단위로 확대되는 환경에서 메모리 유휴율을 낮추고 전송 지연 시간을 단축하는 핵심 아키텍처로 분석됩니다.
    </p>
  </section>

  <!-- 섹션 2 -->
  <section style='margin-bottom: 48px;'>
    <h2 style='font-size: 22px; font-weight: 700; color: #0F172A; border-bottom: 1px solid #CBD5E1; padding-bottom: 10px; margin-bottom: 20px;'>
      2. [전력·에너지 아키텍처] 24/7 카본프리(CFE)를 향한 장주기 에너지저장(LDES) 실증과 기저부하 원전 재가동
    </h2>
    <p style='font-size: 16px; margin-bottom: 16px;'>
      데이터센터의 전력 소모량이 급격히 증가함에 따라 단순 재생에너지 인증서(REC) 구매를 넘어, 실제 소비 시점과 발전 시점을 1시간 단위로 일치시키는 '24/7 카본프리 에너지(CFE)' 아키텍처로의 전환이 본격화되고 있습니다. 태양광과 풍력 발전의 고유한 한계인 기상 간헐성을 극복하기 위해 하이퍼스케일러들은 다층 저장장치(Multi-Tier Storage)와 원자력 기저부하 전력 확보에 대규모 자본을 투입하고 있습니다.
    </p>
    <p style='font-size: 16px; margin-bottom: 16px;'>
      구글은 미국 전력 개발사 MN8 에너지(MN8 Energy), 에너지 저장 전문 기업 이오스 에너지(Eos Energy Enterprises)와 협력하여 미국 웨스트버지니아주 카나와 카운티(Kanawha County)에서 '매머드 솔라(Mammoth Solar)' 하이브리드 전력 프로젝트를 가동한다고 공식 발표했습니다. 본 프로젝트는 86MW 규모의 태양광 발전소에 두 가지 서로 다른 특성을 가진 배터리 시스템을 결합한 총 380MWh 용량의 에너지 저장 단지를 구축하는 사업입니다.
    </p>
    <div style='background-color: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 6px; padding: 18px; margin: 20px 0;'>
      <h3 style='font-size: 16px; font-weight: 700; color: #0F172A; margin-top: 0; margin-bottom: 12px;'>📊 웨스트버지니아 '매머드 솔라' 하이브리드 전력망 구성 사양</h3>
      <table style='width: 100%; border-collapse: collapse; font-size: 14px; text-align: left;'>
        <thead>
          <tr style='border-bottom: 2px solid #CBD5E1; color: #475569;'>
            <th style='padding: 8px;'>전력/저장 자원</th>
            <th style='padding: 8px;'>설비 용량</th>
            <th style='padding: 8px;'>방전 지속 시간</th>
            <th style='padding: 8px;'>상업 운전 예정 시기</th>
          </tr>
        </thead>
        <tbody>
          <tr style='border-bottom: 1px solid #E2E8F0;'>
            <td style='padding: 8px; font-weight: 600;'>태양광 발전 설비</td>
            <td style='padding: 8px;'>86 MW</td>
            <td style='padding: 8px;'>일조 시간 연동</td>
            <td style='padding: 8px;'>2028년</td>
          </tr>
          <tr style='border-bottom: 1px solid #E2E8F0;'>
            <td style='padding: 8px; font-weight: 600;'>리튬이온 배터리(BESS)</td>
            <td style='padding: 8px;'>70 MW / 280 MWh</td>
            <td style='padding: 8px;'>정격 약 4시간</td>
            <td style='padding: 8px;'>2029년</td>
          </tr>
          <tr>
            <td style='padding: 8px; font-weight: 600;'>아연계 장주기 저장장치(LDES)</td>
            <td style='padding: 8px;'>10 MW / 100 MWh</td>
            <td style='padding: 8px;'>최대 10시간</td>
            <td style='padding: 8px;'>2030년</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p style='font-size: 16px; margin-bottom: 16px;'>
      이 사업의 핵심 기술적 차별점은 단기 급속 방전에 유리한 리튬이온 배터리와 최대 10시간 동안 안정적인 방전 곡선을 유지하는 이오스의 'Z3' 아연계 수계 배터리를 계층화하여 단일 가상 발전소(VPP) 형태로 급전(Dispatchable Power)을 수행한다는 점입니다. 낮 시간대 발전된 잉여 태양광 전력은 1차적으로 4시간용 리튬이온 저장장치에 충전되어 저녁 피크 부하에 대응하고, 심야 및 일조량이 부족한 시간대에는 10시간용 아연 LDES를 통해 전력을 방출함으로써 24시간 동안 안정적인 전력 프로파일을 유지합니다. 생산된 전력은 미국 동부 최대 전력 계통인 PJM 인터커넥션(PJM Interconnection)에 공급되어 웨스트버지니아 지역에 위치한 구글 데이터센터의 무탄소 전력 공급원으로 활용됩니다.
    </p>
    <blockquote style='background-color: #F1F5F9; border-left: 4px solid #475569; margin: 20px 0; padding: 14px 20px; font-style: italic; color: #334155;'>
      "구글은 데이터센터의 용량 수요를 충족하는 동시에 더 깨끗하고 저렴한 에너지 시스템으로의 전환을 앞당기는 해법을 지원하는 데 전념하고 있습니다." <br>
      <span style='font-style: normal; font-size: 14px; font-weight: 600; color: #64748B;'>— 루시아 톈(Lucia Tian) 구글 첨단에너지기술 담당 이사</span>
    </blockquote>
    <p style='font-size: 16px; margin-bottom: 16px;'>
      장주기 저장장치 실증과 더불어, 원자력 발전을 통한 안정적 기저부하(Baseload) 확보 역시 가시화되고 있습니다. 미국 연방정부는 최근 아이오와주 듀안 아널드(Duane Arnold) 원자력 발전소의 재가동 사업에 19억 달러(한화 약 2조 5천억 원) 규모의 대출 보증을 승인했습니다. 이 프로젝트는 구글의 대규모 청정 전력 장기 구매 계약(PPA)과 긴밀히 연계되어 있으며, 신규 원전 건설에 수반되는 수년의 인허가 기간을 단축하여 가동 중단되었던 기존 원전을 신속하게 계통에 복귀시킴으로써 데이터센터 집적지에 탄소 배출 없는 24시간 연속 기저 전력을 조기에 공급하려는 전략의 일환입니다.
    </p>
  </section>

  <!-- 섹션 3 -->
  <section style='margin-bottom: 48px;'>
    <h2 style='font-size: 22px; font-weight: 700; color: #0F172A; border-bottom: 1px solid #CBD5E1; padding-bottom: 10px; margin-bottom: 20px;'>
      3. [글로벌 거점·통신망] 동남아 AI 인프라 허브 확장과 저궤도(LEO) 위성 결합 분산 백홀
    </h2>
    <p style='font-size: 16px; margin-bottom: 16px;'>
      데이터센터의 물리적 입지와 네트워크 연결성 또한 급격한 변화를 겪고 있습니다. 북미 및 서유럽 중심의 데이터센터 공급망이 전력 계통 포화와 송전망 인허가 지연에 직면하면서, 풍부한 수자원과 토지, 우호적인 전력 정책을 보유한 동남아시아 지역이 차세대 AI 클러스터의 전략적 거점으로 부상하고 있습니다.
    </p>
    <p style='font-size: 16px; margin-bottom: 16px;'>
      오픈AI(OpenAI)는 엔비디아가 투자한 지속가능 데이터센터 전문 인프라 기업 퍼머스(Firmus Technologies)와 다년 계약을 체결하고 말레이시아에 전용 AI 데이터센터 용량을 확보했습니다. 싱가포르의 데이터센터 신규 건설 규제에 따른 인접 반사이익을 누리고 있는 말레이시아 조호르(Johor) 등지는 대규모 전력 인입이 용이하고 재생에너지 연계가 유리합니다. 특히 퍼머스가 보유한 고집적 수랭식 액체 냉각(Direct-to-Chip 및 액침 냉각) 인프라를 활용하여 수만 기의 고성능 가속기를 효율적으로 운용함으로써 아시아·태평양 지역의 AI 모델 서빙 지연 시간을 단축하고 데이터 주권 요구에 대응한다는 계획입니다.
    </p>
    <p style='font-size: 16px; margin-bottom: 16px;'>
      한편, 네트워크 전송 계층에서는 지상망 인프라의 물리적 도달 한계를 극복하기 위해 우주 궤도 통신망을 결합하는 하이브리드 아키텍처가 현실화되고 있습니다. 미국 최대 통신사 중 하나인 AT&T 비즈니스(AT&T Business)는 아마존의 저궤도(LEO) 위성 통신 프로젝트인 '프로젝트 카이퍼(Amazon Leo Satellite)'를 기업용 연결성 아키텍처에 통합한다고 발표했습니다.
    </p>
    <p style='font-size: 16px; margin-bottom: 16px;'>
      기존의 정지궤도(GEO) 위성은 500~600ms 수준의 높은 왕복 지연시간(RTT)으로 인해 실시간 데이터센터 백홀로 사용하기 어려웠으나, 고도 수백 km를 비행하는 저궤도 위성은 지연시간을 20~40ms 수준으로 대폭 낮출 수 있습니다. AT&T는 지상 유선 광케이블 및 5G 무선망과 저궤도 위성 링크를 결합하여 외곽 산업 시설, 원격 엣지 컴퓨팅 노드, 재난 위험 지역의 데이터센터에 중단 없는 삼중화 백홀 경로를 제공합니다. 이는 물리적 재해나 해저 케이블 절단 사고 발생 시에도 클라우드 접근성을 보장하는 강력한 비즈니스 연속성(BCP) 솔루션으로 평가받고 있습니다.
    </p>
  </section>

  <!-- 섹션 4 -->
  <section style='margin-bottom: 48px;'>
    <h2 style='font-size: 22px; font-weight: 700; color: #0F172A; border-bottom: 1px solid #CBD5E1; padding-bottom: 10px; margin-bottom: 20px;'>
      4. [데이터 플랫폼] 오픈소스 Valkey 생태계 안착과 서버리스 NoSQL을 통한 운영 오버헤드 최소화
    </h2>
    <p style='font-size: 16px; margin-bottom: 16px;'>
      인프라 아키텍처의 하드웨어 및 에너지 계층의 혁신과 발맞추어, 데이터 계층에서는 운영 인력의 오버헤드를 극소화하고 라이선스 리스크를 회피하기 위한 서버리스 및 오픈소스 기반 현대화가 빠르게 정착되고 있습니다. 글로벌 게임 개발사 SEGA의 신작 모바일 타이틀 「소닉 럼블(Sonic Rumble)」 글로벌 인프라 구축 사례는 이러한 엔지니어링 패러다임의 변화를 잘 대변합니다.
    </p>
    <p style='font-size: 16px; margin-bottom: 16px;'>
      SEGA는 소규모의 핵심 전담 엔지니어링 팀만으로 전 세계 수백만 명의 동시 접속자가 유입되는 환경을 무중단으로 지원하기 위해 'Amazon DynamoDB'와 'Amazon ElastiCache Serverless for Valkey'를 핵심 백엔드로 채택했습니다. 전통적인 인메모리 캐시 클러스터 운영 방식에서는 동시 접속자 급증에 대비해 사전에 노드 수를 오버프로비저닝해야 하며, 샤딩 구성 및 장애 복구에 지속적인 엔지니어링 리소스가 투입되어야 했습니다.
    </p>
    <p style='font-size: 16px; margin-bottom: 16px;'>
      특히 이번 사례에서 주목할 점은 오픈소스 '발키(Valkey)' 엔진의 본격적인 상용 프로덕션 도입입니다. 기존 오픈소스 Redis가 상업적 이용을 제한하는 듀얼 라이선스(SSPL/RSALv2)로 전환함에 따라, 리눅스 재단(Linux Foundation)을 중심으로 AWS, 구글, 오라클 등 주요 클라우드 벤더들이 연합하여 완전한 오픈소스 포크 프로젝트인 Valkey를 발족시켰습니다. AWS가 이를 관리형 서버리스 캐시 서비스로 즉각 상용화함으로써, 기업들은 라이선스 종속성 없이 서브밀리초(sub-millisecond) 레이턴시의 인메모리 성능을 온디맨드로 확장할 수 있게 되었습니다.
    </p>
    <p style='font-size: 16px; margin-bottom: 16px;'>
      수평 확장이 자동화된 완전 관리형 분산 NoSQL 데이터베이스인 DynamoDB와 서버리스 Valkey 캐시의 결합은 용량 산정 실패에 따른 서비스 장애 위험을 차단하고, 실제 처리된 요청량과 저장 용량에 대해서만 비용을 지불하게 함으로써 인프라 총소유비용(TCO)과 운영 조직의 온콜(On-call) 부담을 대폭 절감하는 결과를 입증하고 있습니다.
    </p>
  </section>

  <!-- 아키텍트 총평 -->
  <section style='background-color: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 8px; padding: 24px; margin-bottom: 40px;'>
    <h2 style='font-size: 18px; font-weight: 700; color: #0F172A; margin-top: 0; margin-bottom: 12px;'>
      💡 테크 에디터 분석 총평: 복합 다층화(Multi-Tiering) 시대로 진입한 인프라 스택
    </h2>
    <p style='font-size: 15px; color: #334155; margin-bottom: 12px; line-height: 1.7;'>
      오늘 집계된 주요 동향들은 공통적으로 인프라의 모든 계층에서 단일 솔루션 의존에서 탈피해 '복합 다층화(Multi-Tiering)' 아키텍처로 급속히 재편되고 있음을 보여줍니다. 컴퓨팅 실리콘에서는 특정 공급사의 독점적 GPU 생태계에서 벗어나 전력 효율에 특화된 퀄컴-AWS 맞춤형 ASIC과 CXL 패브릭이 상호 보완적인 역할을 수행하기 시작했습니다. 
    </p>
    <p style='font-size: 15px; color: #334155; margin: 0; line-height: 1.7;'>
      전력 계층 역시 태양광 단일 자원의 한계를 극복하기 위해 4시간 리튬이온과 10시간 아연 LDES, 그리고 원자력 기저부하가 유기적으로 맞물리는 하이브리드 계통이 구축되고 있습니다. 데이터센터 아키텍트와 인프라 총괄 의사결정권자들은 개별 컴포넌트의 최고 사양 경쟁을 넘어, 연산-광학 통신-다계층 전력-서버리스 소프트웨어로 이어지는 전 계층의 통합 효율성과 공급망 탄력성을 종합적으로 평가해야 하는 시점에 도달해 있습니다.
    </p>
  </section>

  <!-- 큐레이션 링크 -->
  <footer style='border-top: 2px solid #E2E8F0; padding-top: 24px;'>
    <h3 style='font-size: 16px; font-weight: 700; color: #0F172A; margin-top: 0; margin-bottom: 14px;'>
      🔗 오늘의 주요 큐레이션 링크
    </h3>
    <ul style='list-style-type: none; padding-left: 0; margin: 0; font-size: 14px; line-height: 1.8;'>
      <li style='margin-bottom: 8px;'>
        <span style='display: inline-block; width: 85px; font-weight: 600; color: #64748B;'>[연합뉴스]</span>
        <a href='https://news.einfomax.co.kr/news/articleView.html?idxno=4433967' target='_blank' rel='noopener noreferrer' style='color: #2563EB; text-decoration: none; font-weight: 500;'>美 퀄컴, 아마존과 손잡고 AI 칩 개발…최대 600억달러 규모</a>
      </li>
      <li style='margin-bottom: 8px;'>
        <span style='display: inline-block; width: 85px; font-weight: 600; color: #64748B;'>[헬로디디]</span>
        <a href='https://news.google.com/rss/articles/CBMiakFVX3lxTE9DM1p1QlNmbHR0VFZ2N29uS0R2dUw0SEE5OUpya3YwNVdEeVliX2FyUm8yclg5VU5lOElYUmFlTmZ4N0dLZEtDSDd1TmJSU3Ruel9fekZ0LUZuRjlaVEl2Q0NXOUZOOVg5U1E?oc=5' target='_blank' rel='noopener noreferrer' style='color: #2563EB; text-decoration: none; font-weight: 500;'>파네시아·메타, AI 데이터센터 전체 '하나의 칩'처럼 연결</a>
      </li>
      <li style='margin-bottom: 8px;'>
        <span style='display: inline-block; width: 85px; font-weight: 600; color: #64748B;'>[앱스토리]</span>
        <a href='https://news.google.com/rss/articles/CBMiT0FVX3lxTE0zbDNvSXktWlhOSmVKM0tSemN2dnc1SVpBZWJENnZ1dDUwQksycTlwWGt0V3FmMzBHd2xMeHVObEIxV1puVG40MXlibXloVUk?oc=5' target='_blank' rel='noopener noreferrer' style='color: #2563EB; text-decoration: none; font-weight: 500;'>오픈AI, 말레이시아 AI 데이터센터 확보…엔비디아 투자사 퍼머스와 다년 계약</a>
      </li>
      <li style='margin-bottom: 8px;'>
        <span style='display: inline-block; width: 85px; font-weight: 600; color: #64748B;'>[AI타임스]</span>
        <a href='https://www.aitimes.com/news/articleView.html?idxno=214968' target='_blank' rel='noopener noreferrer' style='color: #2563EB; text-decoration: none; font-weight: 500;'>구글, 태양광·배터리 결합 프로젝트로 데이터센터 전력 공급</a>
      </li>
      <li style='margin-bottom: 8px;'>
        <span style='display: inline-block; width: 85px; font-weight: 600; color: #64748B;'>[AWS 블로그]</span>
        <a href='https://news.google.com/rss/articles/CBMigwFBVV95cUxNYk11Zkgyb2kwTXdHb1otRlVxekZ2R3ZuOFllZ2FXUmJLWjlSU0xLUWNaQjBGbEI1cWVyNUxCU1FqV2g2M2JpZFBybnBtTU9pSGg3VFNudXEtaGhZSjlEOEp0VmRHV2MwZ3ZxSDJkeXZhMnJkZmZWUG5aenRKaWozNkdzYw?oc=5' target='_blank' rel='noopener noreferrer' style='color: #2563EB; text-decoration: none; font-weight: 500;'>주식회사 SEGA, 글로벌 출시를 위한 Amazon DynamoDB 및 Amazon ElastiCache Serverless for Valkey 활용 사례</a>
      </li>
      <li style='margin-bottom: 8px;'>
        <span style='display: inline-block; width: 85px; font-weight: 600; color: #64748B;'>[Qualcomm]</span>
        <a href='https://news.google.com/rss/articles/CBMisAFBVV95cUxQaEg3TlU0dE54MjJpRk1OelViNFJud2hjUnJiOWhnTHVVVjRQUmhKOGcwY0NrZFBndG5fb3ZBRFk4RkZ0eU9VdXNfM3NvZk5SWWdJX0MwTC1UX2N6dzg2dEN5Y3UzVFJyN1hWZUZiWmpHQlNQU1dacG5jLXhJMHBCZmNMcXlfQVJWenhmUHpNMkRYWlpEZXM5OWdoUkIwXzBsQ1lqUlNBM1hhV0xCZDY0TQ?oc=5' target='_blank' rel='noopener noreferrer' style='color: #2563EB; text-decoration: none; font-weight: 500;'>Qualcomm Announces Multi-Generational Product Collaboration with Amazon to Build Next-Generation AI Data Center Infrastructure</a>
      </li>
      <li style='margin-bottom: 8px;'>
        <span style='display: inline-block; width: 85px; font-weight: 600; color: #64748B;'>[AT&T]</span>
        <a href='https://news.google.com/rss/articles/CBMiakFVX3lxTE5ueGVLUGo4dTh3d3EzaTl2eUh5QjZOY2ZDX0UyenNiWmR6UGhPWkw3bDNzMlY4cUhOZ0dsRjZuVkJ3cjREaW9iTEVOMWhCcTJ1N0RfMnBQMUZQZmZtZDlMUDlGaHBqRWhMcUE?oc=5' target='_blank' rel='noopener noreferrer' style='color: #2563EB; text-decoration: none; font-weight: 500;'>AT&T Business Expands Connectivity Architecture with Amazon Leo Satellite</a>
      </li>
      <li>
        <span style='display: inline-block; width: 85px; font-weight: 600; color: #64748B;'>[Northeast]</span>
        <a href='https://news.google.com/rss/articles/CBMiuAFBVV95cUxQWGs1NzNCa3RYdmJISllfRHZlWk1EcTlLenZwSThvNU5zRC1tTHl5TkM2ZzdKcFJKZDZadXBOOWdqQm9NbW9FMG9UX2dmNEtDUjZkUC1EXzNTZXN3RzFNT3VDalNNX3pUal9faEstX0RENDVVS0lSdTBKN0poaThPT01Oc3owZWRUTHBvdDYyUXRtRU1kM1dIcTBYdkphdHFKR2RPY19GQV8tN09ic2ZLY3lSVXB6cTRn?oc=5' target='_blank' rel='noopener noreferrer' style='color: #2563EB; text-decoration: none; font-weight: 500;'>U.S. Government Backs Iowa Nuclear Restart With $1.9 Billion Loan Tied to Google Deal</a>
      </li>
    </ul>
  </footer>

</div>